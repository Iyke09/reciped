// a reducer takes in two things:
import { browserHistory } from 'react-router';
// 1. the action (info about what happened)
// 2. copy of current state

function edit(state = [], action) {
    switch(action.type) {
      case 'ADD_COMMENT' :
        console.log('Incrementing Comment RECIPE 1');
        console.log(action);
        return [...action.response.recipe]
      default:
        return state;
    }
  }
  
  export default edit;
  