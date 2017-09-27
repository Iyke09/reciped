// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
    switch(action.type) {
      case 'INCOMING_RECIPES' :
        console.log('Incrementing RECIPES');
        console.log(state);
        console.log(action)
        console.log( [ action.response] )

        return [...action.response]

      default:
        return state;
    }
  }
  
  export default posts;
  