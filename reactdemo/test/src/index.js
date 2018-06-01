// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


// import {createStore}  from "redux";


// function counter(state=0,action){
//   //action 是有type
//   switch(action.type){
//     case '加机关枪':
//     return state+1
//     case '减机关枪':
//     return state-1
//     default:
//     return 10
//   }
// }


// const store=createStore(counter);
// const init=store.getState();
// console.log(init);

// // 订阅者 每次状态发送变化就会触发
// function listener(){
//   const current=store.getState();
//   console.log(`现在有机关枪${current}`)
// }
// store.subscribe(listener)
// // 派发事件
// store.dispatch({type:'加机关枪'})
// console.log(store.getState())
// store.dispatch({type:'加机关枪'})
// console.log(store.getState())
// store.dispatch({type:'减机关枪'})
// console.log(store.getState())



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
// import {count} from './index.redux';
import reducers from './reducer.js'
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom';
import Auth from './auth.js'
import Dashboard from './dashboard.js'
const store=createStore(reducers)
console.log(store,'storestore')
function Erying(){
  return <h2>一营</h2>
}
function Eryings(){
  return <h2>Eryings</h2>
}
function Qibinglian(){
  return <h2>Qibinglian</h2>
}
class Test extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    // console.log(this.props,'>>>>>>>>>>>>>>>>>>>>>>>')
    // console.log(this.props,'>>>>>>>>>>>>>>>>>>>>>>>')
    // this.props.history.push('/erying')
    return <h2>测试组件{this.props.match.url}</h2>
  }
}
function render(){
  ReactDOM.render(<BrowserRouter>
    <div>
    <Switch>
        <Route path='/login'  exact component={Auth}></Route>
        <Route path='/dashboard'   component={Dashboard}></Route>
        <Redirect to='/dashboard'></Redirect>
        {/* <Route path='/qibinglian' component={Qibinglian}></Route> */}
    </Switch>
   
    {/* <Redirect to='/sss'></Redirect> */}
    
     <App  store={store}/>
     </div>
  </BrowserRouter>, document.getElementById('root'));
}
render();
store.subscribe(render)
