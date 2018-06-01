import {createStore}  from "redux";

function counter(state=0,action){
  //action 是有type
  switch(action.type){
    case '加机关枪':
    return state+1
    case '减机关枪':
    return state-1
    default:
    return 10
  }
}


const store=createStore();
const init=store.getState();
console.log(init)