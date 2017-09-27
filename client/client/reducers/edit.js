// a reducer takes in two things:
import { browserHistory } from 'react-router';
// 1. the action (info about what happened)
// 2. copy of current state

function edit(state = [], action) {
    switch(action.type) {
      case 'SINGLE_RECIPE' :
        console.log('Incrementing EDIT RECIPE 1');
        console.log(action);
        console.log('CALLING BROWSERHISTORY NEXT')
        console.log([action.response.recipe])
        console.log(state)
        return [action.response.recipe]
      default:
        return state;
    }
  }
  
  export default edit;
  