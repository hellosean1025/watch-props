import React from 'react';

function getParams (state, props = {}) {
  let watch = state.__watchObject;
  if(watch && typeof watch === 'object'){
    let params = {};
    Object.keys (watch).forEach(key => {
      params[key] = props[key];
    });
    return params;
  }
}

function shallowEqual(data1 = {}, data2 = {}) {
  let keys = Object.keys(data1);
  for (let i in keys) {
    let key = keys[i];
    if (data1[key] !== data2[key]) {
      return false;
    }
  }
  return true;
}

export default function WatchComponentCreator(WrappedComponent){
  class WatchComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {}
    }
  
    static getDerivedStateFromProps (nextProps, prevState) {
      let params = getParams(prevState, nextProps);
      let __watchObject = prevState.__watchObject;
      if(!params || !__watchObject){
        return null;
      }
      if(!prevState.__watchState){
        return {
          __watchState: params,
        }
      }else if(!shallowEqual(params, prevState.__watchState)){
        
        return {
          __watchState: params,
        };
      }
      return null;
    }
  
    componentDidUpdate (prevProps) {
      let params = this.state.__watchState;
      let watchObject = this.state.__watchObject;
      if(!watchObject || !params){
        return;
      }
      Object.keys(watchObject).forEach(key=>{
        if(params[key] !== prevProps[key]){
          if(watchObject[key] && typeof watchObject[key] === 'function'){
            watchObject[key].call(this.child, params[key], prevProps[key])
          }
        }
      })
    }

    componentDidMount(){
      let watch = this.child.watch;
      if(watch){
        if(typeof watch === 'function'){
          this.setState({
            __watchObject: watch.call(this.child)
          })
        }else if(typeof watch === 'object'){
          this.setState({
            __watchObject: watch
          })
        }
        
      }
    }
  
  
    render(){
      return <WrappedComponent ref={child=> this.child = child} {...this.props} />
    }
  }
  return WatchComponent
}