// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function users(state = [], action) {
    switch(action.type) {
      case 'INCOMING_TOKEN' :
        console.log('Incrementing users from the saga!!!');
        const token = action.response.token;

        localStorage.setItem('token', token )
        console.log('done!')
      default:
        return state;
    }
  }
  
  export default users;
  