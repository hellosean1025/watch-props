# watch-props
A higher-order component that adds watch props features to the react component

### Install
npm i --save watch-props

### Usage

```js
import React from 'react'
import watchProps from 'watch-props'

@watchProps
class App extends React.Component{
  watch={
     id: function(newValue, oldValue){
        console.log(newValue, oldValue) //print "100, 1"
     }
  }
}

class Home extends React.Component{
  state = {
    id: 1
  }
  
  componentDidMount(){
     setTimeout(()=>{
        this.setState({
           id: 100
        })
     },1000)
  }

   render(){
     return <App id={this.state.id} />
   }
}




```
