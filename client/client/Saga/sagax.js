import { delay } from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { NavigationActions } from 'react-navigation';
import { browserHistory } from 'react-router';

// ...

// Our worker Saga: will perform the async increment task
const rootUrl = 'https://jsonplaceholder.typicode.com';
const userUrl = 'http://localhost:8000/api/users'
const recipeUrl = 'http://localhost:8000/api/recipes'
export function* incrementAsync(action) {
  try{
      console.log('trying to connect...')
    //   const response = yield call(axios.get, `${rootUrl}/posts`)   
    // //    yield put({ type: 'INCREMENT', response: response.data })
      browserHistory.push('/')
      console.log('Done!')
  }catch(e){
      console.log('ERROR!!!')
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    console.log('running!')
    yield takeEvery('INCREMENT_LIKES', incrementAsync)
}


//-----------------adduser saga!!!------
export function* addUserAsync(action) {
    try{
        console.log('trying to connect to user db...')
        const response = yield call(axios.post, `${userUrl}/signup`, {
            username: action.name,
            email: action.email,
            password: action.password
        })   
        // yield put({ type: 'INCREMENT', response: response.data })
        browserHistory.push('/auth/signin')
        console.log(response)
    }catch(e){
        const error = e.response.data.message;
        yield put({ type: 'ERROR', error })
    }
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchAddUser() {
      console.log('running adduser!')
      yield takeEvery('ADD_USER', addUserAsync)
  }
//-----------------adduser saga!!!------



//-----------------checkuser saga!!!------
export function* checkUserAsync(action) {
    try{
        console.log('trying to connect to user db...')
        const response = yield call(axios.post, `${userUrl}/signin`, {
            email: action.email,
            password: action.password
        })
        yield put({ type: 'INCOMING_TOKEN', response: response.data }) 
        browserHistory.push('/')
    }catch(e){
        const error = e.response.data.message;
        yield put({ type: 'ERROR', error })
    }
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchcheckUser() {
      console.log('running checkuser!')
      yield takeEvery('CHECK_USER', checkUserAsync)
  }
//-----------------checkuser saga!!!------



//-----------------checkuser saga!!!------
export function* getRecipesAsync(action) {
    try{
        console.log('trying to connect to user db...')
        let token = localStorage.getItem('token')
        const response = yield call(axios.get, `${recipeUrl}?token=${token}`)
        const response2 = yield call(axios.get, `${recipeUrl}/fav?token=${token}`)
        yield put({ type: 'FAV_SUCCESS', response: response2.data }) 
        yield put({ type: 'INCOMING_RECIPES', response: response.data }) 
    }catch(e){
        console.log( e.response )
    }
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchGetRecipe() {
      console.log('getRecipes running')
      yield takeEvery('GET_RECIPES', getRecipesAsync)
  }
//-----------------checkuser saga!!!------


//-----------------checkuser saga!!!------
export function* addRecipesAsync(action) {
    try{
        console.log('trying to connect to user db...') 
        console.log('heyyyyy ' + action)
        let token = localStorage.getItem('token')
        const response = yield call(axios.post, `${recipeUrl}?token=${token}`, {
            title: action.title,
            img: action.image,
            category: action.category,
            description: action.description
        })
        yield put({ type: 'RECIPE_SUCCESS', response: response.data }) 
    }catch(e){
        const error = e.response.data.message;
        yield put({ type: 'ERROR', error })
    }
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchAddRecipe() {
      console.log('addRecipes running')
      yield takeEvery('ADD_RECIPES', addRecipesAsync)
  }
//-----------------checkuser saga!!!------

export function* getSingleRecipesAsync(action) {
    try{
        console.log('trying to connect to EDIT RECIPE 1...') 
        console.log('heyyyyy ' + action)
        let token = localStorage.getItem('token')
        const response = yield call(axios.get, `${recipeUrl}/${action.index}?token=${token}`)
        yield put({ type: 'SINGLE_RECIPE', response: response.data })
        setTimeout(function() {
            browserHistory.push('/recipes/edit') 
        }, 1000);
    }catch(e){
        console.log( e.response)
    }
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchSingleRecipe() {
      console.log('addRecipes running')
      yield takeEvery('GET_SINGLE_RECIPES', getSingleRecipesAsync)
  }
//-----------------checkuser saga!!!------


export function* editSingleRecipesAsync(action) {
    try{
        console.log('trying to connect to update recipe db...') 
        console.log('helllllllo ' + action)
        let token = localStorage.getItem('token')
        const response = yield call(axios.put, `${recipeUrl}/${action.index}?token=${token}`,{
            title: action.title ,
            image: action.image ,
            category: action.category ,
            description: action.description 
        })
        yield put({ type: 'RECIPE_SUCCESS', response: response.data }) 
    }catch(e){
        const error = e.response.data.message;
        yield put({ type: 'ERROR', error })
    }
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchEditSingleRecipe() {
      console.log('EDITRecipes running')
      yield takeEvery('EDIT_RECIPES', editSingleRecipesAsync)
  }
//-----------------checkuser saga!!!------


export function* dltRecipesAsync(action) {
    try{
        console.log('deleting process')
        let token = localStorage.getItem('token')
        const response = yield call(axios.delete, `${recipeUrl}/${action.index}?token=${token}`)
        console.log(response.data)
        browserHistory.push('/')
    }catch(e){
       console.log(e.response)
    }
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchdltRecipe() {
      console.log('delete watcher running')
      yield takeEvery('DLT_RECIPE', dltRecipesAsync)
  }
//-----------------checkuser saga!!!------

export function* favRecipesAsync(action) {
    try{
        let token = localStorage.getItem('token')
        const response = yield call(axios.post, `${recipeUrl}/${action.index}/fav?token=${token}`)
        const response2 = yield call(axios.get, `${recipeUrl}/fav?token=${token}`)
        yield put({ type: 'RECIPE_SUCCESS', response: response.data }) 
        yield put({ type: 'FAV_SUCCESS', response: response2.data }) 
    }catch(e){
       console.log(e.response)
    }
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchFavRecipe() {
      console.log('fav watcher running')
      yield takeEvery('FAV_RECIPE', favRecipesAsync)
  }
//-----------------checkuser saga!!!------


export function* upvoteRecipesAsync(action) {
    try{
        let token = localStorage.getItem('token')
        const response = yield call(axios.post, `${recipeUrl}/${action.index}/upvote?token=${token}`)
        browserHistory.push('/')
        console.log(response.data.message)
    }catch(e){
       console.log(e.response)
    }
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchUpvoteRecipe() {
      yield takeEvery('UPVOTE_RECIPE', upvoteRecipesAsync)
  }

  export function* downvoteRecipesAsync(action) {
    try{
        let token = localStorage.getItem('token')
        const response = yield call(axios.post, `${recipeUrl}/${action.index}/downvote?token=${token}`)
        browserHistory.push('/')
        console.log(response.data.message)
    }catch(e){
       console.log(e.response)
    }
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchDownvoteRecipe() {
      yield takeEvery('DOWNVOTE_RECIPE', downvoteRecipesAsync)
  }

  export function* getSingleAsync(action) {
    try{
        yield put({ type: 'GET_COMMENT', response: action.index }) 
        let token = localStorage.getItem('token')
        const response = yield call(axios.get, `${recipeUrl}/${action.index}?token=${token}`)
        yield put({ type: 'ADD_SINGLE', response: response.data }) 
        console.log(response)
    }catch(e){
       console.log(e.response)
    }
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchGetSingleRecipe() {
      yield takeEvery('GET_SINGLE', getSingleAsync)
  }

  export function* getCommentAsync(action) {
    try{
        console.log('i am runnin at localhost')
        let token = localStorage.getItem('token')
        const response = yield call(axios.get, `${recipeUrl}/${action.response}/rev?token=${token}`)
        yield put({ type: 'ADD_COMMENT', response: response.data }) 
        console.log(response)
    }catch(e){
       console.log(e.response)
    }
  }
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export function* watchGetComment() {
      yield takeEvery('GET_COMMENT', getCommentAsync)
  }

export default function* rootSaga() {
    yield [
      watchIncrementAsync(),
      watchGetComment(),
      watchGetSingleRecipe(),
      watchDownvoteRecipe(),
      watchUpvoteRecipe(),
      watchAddUser(),
      watchFavRecipe(),
      watchdltRecipe(),
      watchSingleRecipe(),
      watchEditSingleRecipe(),
      watchcheckUser(),
      watchGetRecipe(),
      watchAddRecipe()
    ]
}