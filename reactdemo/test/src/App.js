// import  React from "react"
// import {Button,List} from 'antd-mobile'
// // import 'antd-mobile/dist/antd-mobile.css'
// class App extends React.Component{
//   render(){
//     const boss='sss'
//     return (<div>
//           <h2>孙沙沙,{boss}</h2>
//           <Student  la='李四'></Student>
//           <Wu la="王五"></Wu>
//       </div>)
//   }
// }
// class Student extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       solders:['1你好','2张三','3sss']
//     }

//     //this.addSolders=this.addSolders.bind(this);
//   }
//   addSolders(){
//     console.log('点击按钮')
//     this.setState({
//       solders:[...this.state.solders,'新增加的数据1'+Math.random()]
//     })
//   }
//   addSolders2=()=>{
//     this.setState({
//       solders:[...this.state.solders,'新增加的数据2'+Math.random()]
//     })
//   }
//   componentWillMount(){
//     console.log('组件马上要加载了')
//   }
//   componentDidMount(){
//     console.log('组件加载完毕')
//   }
//   render(){
//     console.log('正在加载')
//     return (<div>
//                 <h2>{this.props.la}</h2> 
//                 <button onClick={this.addSolders.bind(this)}>点击按钮</button>
//                 <Button type="primary" onClick={()=>this.addSolders2()}>点击按钮</Button>
//                 {/* <List renderHeader={()=>'士兵列表'}>
//                 {this.state.solders.map(function(item){
//                       return <List-item key={item}>{item}</List-item>
//                     })} 
//                 </List> */}
//                 <ul>       
//                     {this.state.solders.map(function(item){
//                       return <li key={item}>{item}</li>
//                     })}                 
//                 </ul>    
//          </div>)
//   }
// }
// function Wu(props){
//   return <div>王五{props.la}</div>
// }
// export default App




import React from 'react';
import {addGUN} from './index.redux'
class  App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const store=this.props.store;
    const num=store.getState();
    return (
      <div>
        <h1>{num}</h1>
        <button onClick={()=>store.dispatch(addGUN())}>申请武器</button>
      </div>
    )
  }
}
export default App