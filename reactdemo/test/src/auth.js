import React from 'react';
import { connect } from 'react-redux';
import { login } from './auth.redux';
console.log(connect)

// 合并reducers
connect(
  state=>state
)(Auth)
class Auth extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (<div><h2>sss</h2></div>)
  }
}
export default Auth