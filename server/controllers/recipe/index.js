import createRecipe from './addRecipe';
import updateRecipe from './updateRecipe';
import deleteRecipe from './deleteRecipe';
import favoriteRecipe from './favoriteRecipe';
import reviewRecipe from './reviewRecipe';
import recipeReviews from './recipeReviews';
import sortRecipe from './sortRecipe';
import allRecipe from './allRecipe';
import singleRecipe from './singleRecipe';
import allFav from './allFavorites';
import upvote from './upvote';
import downvote from './downvote';

const recipesController = {
  createRecipe,
  updateRecipe,
  deleteRecipe,
  favoriteRecipe,
  allRecipe,
  reviewRecipe,
  sortRecipe,
  singleRecipe,
  allFav,
  recipeReviews,
  upvote,
  downvote
};

export default recipesController;
