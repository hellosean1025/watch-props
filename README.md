# watch-props
一个高阶组件，给 react 组件增加 watch props 特性，目前仅支持 React >= 16.3

### 安装
npm i --save watch-props

### 使用

```js
import React from 'react'
import watchProps from 'watch-props'

@watchProps
class App extends React.Component{
  watch={
     prop: function(newValue, oldValue){
        console.log(newValue, oldValue)
     }
  }
}


```
