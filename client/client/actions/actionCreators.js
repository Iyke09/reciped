// increment
export function increment(index) {
    return {
      type: 'INCREMENT_LIKES',
      index
    }
  }
export function deleteRecipe(index) {
    return {
      type: 'DLT_RECIPE',
      index
    }
  }
  export function favRecipe(index) {
    return {
      type: 'FAV_RECIPE',
      index
    }
  }
  export function getSingle(index) {
    return {
      type: 'GET_SINGLE',
      index
    }
  }

  export function getComments(index) {
    return {
      type: 'GET_COMMENT',
      index
    }
  }

  export function upvote(index) {
    return {
      type: 'UPVOTE_RECIPE',
      index
    }
  }

  export function downvote(index) {
    return {
      type: 'DOWNVOTE_RECIPE',
      index
    }
  }

  export function userFav(index, id) {
    return {
      type: 'FAV_USER',
      index,
      id
    }
  }
export function editRecipe(index) {
    return {
      type: 'GET_SINGLE_RECIPES',
      index
    }
  }
  
  // add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

export function editRecipex(index, title, image, category, description)  {
    return {
        type: 'EDIT_RECIPES',
        index,
        title,
        image,
        category,
        description
    }
}

export function addUser(name, email, password) {
    return {
        type: 'ADD_USER',
        name,
        email,
        password
    }
}

export function checkUser(email, password) {
    return {
        type: 'CHECK_USER',
        email,
        password
    }
}

export function addRecipe(title, image, category, description)  {
    return {
        type: 'ADD_RECIPES',
        title,
        image,
        category,
        description
    }
}
export function getRecipes() {
    return {
        type: 'GET_RECIPES'
    }
}
  // remove comment
  
export function removeComment(postId, i) {
    return {
      type: 'REMOVE_COMMENT',
      i,
      postId
    }
}
  