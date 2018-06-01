

import React from 'react';
import ReactDom from 'react-dom';
import App from './App';


import {createStore} from "redux";
import {count} from './index.redux';
const store=createStore(count);


function render(){
  ReactDom.render(<App store={store}/>,document.getElementById('root'))
}
render();
