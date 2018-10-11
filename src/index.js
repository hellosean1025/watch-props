import React from 'react';

function getParams (state, props = {}) {
  let watch = state.__watchObject;
  if (watch && typeof watch === 'object') {
    let params = {};
    Object.keys (watch).forEach (key => {
      params[key] = props[key];
    });
    return params;
  }
}

function shallowEqual (data1 = {}, data2 = {}) {
  let keys = Object.keys (data1);
  for (let i in keys) {
    let key = keys[i];
    if (data1[key] !== data2[key]) {
      return false;
    }
  }
  return true;
}

function checkReactGt163 () {
  let versions = React.version.split ('.');
  if (versions[0] > 16) return true;
  if (versions[0] == 16 && versions[1] >= 3) {
    return true;
  }
  return false;
}

function handleReactGt163 (WatchComponent) {
  WatchComponent.prototype.componentDidUpdate = function (prevProps) {
    let params = this.state.__watchState;
    let watchObject = this.state.__watchObject;
    if (!watchObject || !params) {
      return;
    }
    Object.keys (watchObject).forEach (key => {
      if (params[key] !== prevProps[key]) {
        if (watchObject[key] && typeof watchObject[key] === 'function') {
          watchObject[key].call (this.child, params[key], prevProps[key]);
        }
      }
    });
  };

  WatchComponent.getDerivedStateFromProps = function (nextProps, prevState) {
    let params = getParams (prevState, nextProps);
    let __watchObject = prevState.__watchObject;
    if (!params || !__watchObject) {
      return null;
    }
    if (!prevState.__watchState) {
      return {
        __watchState: params,
      };
    } else if (!shallowEqual (params, prevState.__watchState)) {
      return {
        __watchState: params,
      };
    }
    return null;
  };
}

function handleReactLt163(WatchComponent){
  WatchComponent.prototype.componentWillReceiveProps = function(nextProps){
    if(!this.state.__watchObject) return;
    let watchObject = this.state.__watchObject;
    Object.keys(watchObject).forEach(key=>{
      if(this.props[key] !== nextProps[key]){
        watchObject[key].call(this.child, nextProps[key], this.props[key])
      }
    })
  }
}

export default function WatchComponentCreator (WrappedComponent) {
  class WatchComponent extends React.PureComponent {
    constructor (props) {
      super (props);
      this.state = {};
    }

    componentDidMount(){
      let watch = this.child.watch;
      if (watch) {
        if (typeof watch === 'function') {
          this.setState ({
            __watchObject: watch.call (this.child),
          });
        } else if (typeof watch === 'object') {
          this.setState ({
            __watchObject: watch,
          });
        }
      }
    }

    render () {
      return (
        <WrappedComponent ref={child => (this.child = child)} {...this.props} />
      );
    }
  }

  if (checkReactGt163 ()) {
    handleReactGt163 (WatchComponent);
  } else {
    handleReactLt163 (WatchComponent);
  }

  return WatchComponent;
}
