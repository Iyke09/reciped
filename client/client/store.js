import { createStore, compse , applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga'

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';
import rootSaga from './Saga/sagax'

const sagaMiddleware = createSagaMiddleware()
// create an object for the default data
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState, applyMiddleware(sagaMiddleware));

export const history = syncHistoryWithStore(browserHistory, store);

sagaMiddleware.run(rootSaga)

export default store;
