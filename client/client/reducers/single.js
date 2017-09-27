// a reducer takes in two things:
import { browserHistory } from 'react-router';
// 1. the action (info about what happened)
// 2. copy of current state

function single(state = [], action) {
    switch(action.type) {
      case 'ADD_SINGLE' :
        console.log('Incrementing ADD SINGLE RECIPE 1');
        console.log([action.response.recipe])

        return [action.response.recipe]

      default:
        return state;
    }
  }
  
  export default single;
  