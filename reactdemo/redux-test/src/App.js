import React from 'react'

import {addGUN} from './index.redux'

class App extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    const store=this.props.store;
    const init =store.getState();
    return (
    <div>
      <div>{init}</div>
      <button onClick={()=>store.dispatch(addGUN())}>申请武器</button>
    </div>)
  }
}

export default App