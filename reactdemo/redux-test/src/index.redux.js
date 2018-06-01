//reducer
const ADD_GUN='加机关枪';
const REMOVE_GUN='减机关枪'
export function count(state=0,action){
  //action 是有type
  switch(action.type){
    case ADD_GUN:
    return state+1
    case REMOVE_GUN:
    return state-1
    default:
    return 10
  }
}


export function addGUN(){
  return {type:ADD_GUN}
}
export function removeGUN(){
  return {type:REMOVE_GUN}
}