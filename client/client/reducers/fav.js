// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function fav(state = [], action) {
    switch(action.type) {
        case 'FAV_SUCCESS' :
            console.log('Incrementing fav succes from the saga!!!');
            console.log(state);
            console.log(action.response)
            return [...action.response] 
    default:
        return state;
    }
  }
  
  export default fav;
  