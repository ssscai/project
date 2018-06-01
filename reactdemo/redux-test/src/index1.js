import {createStore} from 'redux';

function count(state=100,action){
  switch(action.type){
    case '加':
    return state+1;
    case '减':
    return state-1;
    default:
    return state;
  }
}

const store=createStore(count)

const init=store.getState();
console.log(init);
function lister(){
  var current=store.getState();
  console.log(`现在有有${current}个不知道什么东西的东西`)
}
//事件监听
store.subscribe(lister)
// 派发事件
store.dispatch({type:'加'})
console.log(store.getState())