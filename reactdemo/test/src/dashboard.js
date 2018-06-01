import React from 'react';
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom';
function Erying(){
  return <h2>一营</h2>
}
function Eryings(){
  return <h2>二营</h2>
}
function Qibinglian(){
  return <h2>Qibinglian</h2>
}
class Test extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <h2>测试组件{this.props.match.url}</h2>
  }
}
class Dashboard extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return ( <ul>
      <li>
        <Link to='/dashboard'>一营</Link>
      </li>
      <li>
        <Link to='/dashboard/erying'>二营</Link>
      </li>
      <li>
        <Link to='/dashboard/qibinglian'>骑兵连</Link>
      </li>
      <Route path='/dashboard' exact  component={Erying} ></Route>
      <Route path='/dashboard/erying' component={Eryings} ></Route>
      <Route path='/dashboard/qibinglian' component={Qibinglian} ></Route>
    </ul>)
  }
}
export default Dashboard