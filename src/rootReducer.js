

export default function rootReducer (state = {size: ""}, action) { 

  switch(action.type){
    case "SET_SIZE": 
      let x = {...state, size: action.setSize} 
      return x;


      default:
        return state

} }
