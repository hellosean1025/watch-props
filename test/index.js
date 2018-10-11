import test from 'ava'
import watchProps from '../dist/watch-props'
import React from 'react'
import PropTypes from 'prop-types'

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test.cb('Test React 16 watchProps',  t=>{
  let num = 0;
  class App extends React.Component{
    static propTypes = {
      x: PropTypes.string
    }
    state={
      a: this.props.x
    }

    watch ={
      x: function(val, old){
        num++;
        this.setState({
          a: val,
          old
        })
      }
    }

    render(){
      return this.state.a;
    }
  }

  let C = watchProps(App);
  let wrapper = mount(<C x={'a'} />);
  t.is(wrapper.text(), 'a');
  setTimeout(()=>{
    wrapper.setProps({
      x: 'b'
    })
  },50)
  setTimeout(()=>{
    t.is(wrapper.text(), 'b');
    let state = wrapper.children().state();
    t.is(state.old, 'a')
    t.is(num, 1)
  },100)

  setTimeout(()=>{
    wrapper.setProps({
      x: 'c'
    })
  },150)

  setTimeout(()=>{
    wrapper.setProps({
      x: 'd'
    })
  },160)

  setTimeout(()=>{
    t.is(wrapper.text(), 'd');
    let state = wrapper.children().state();
    t.is(state.old, 'c')
    t.is(num, 3)
    t.end();
  },200)
  
})


test.cb('React 15',  t=>{
  let num = 0;
  React.version = '15.1.0'
  class App extends React.Component{
    static propTypes = {
      x: PropTypes.string
    }
    state={
      a: this.props.x
    }

    watch ={
      x: function(val, old){
        num++;
        this.setState({
          a: val,
          old
        })
      }
    }

    render(){
      return this.state.a;
    }
  }

  let C = watchProps(App);
  let wrapper = mount(<C x={'a'} />);
  t.is(wrapper.text(), 'a');
  setTimeout(()=>{
    wrapper.setProps({
      x: 'b'
    })
  },50)
  setTimeout(()=>{
    t.is(wrapper.text(), 'b');
    let state = wrapper.children().state();
    t.is(state.old, 'a')
    t.is(num, 1)
  },100)

  setTimeout(()=>{
    wrapper.setProps({
      x: 'c'
    })
  },150)

  setTimeout(()=>{
    wrapper.setProps({
      x: 'd'
    })
  },160)

  setTimeout(()=>{
    t.is(wrapper.text(), 'd');
    let state = wrapper.children().state();
    t.is(state.old, 'c')
    t.is(num, 3)
    t.end();
  },200)
  
})
