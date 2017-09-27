import express from 'express';
import recipeController from '../controllers/recipe';

const router = express.Router();

router.post('/', recipeController.createRecipe);

router.get('/', recipeController.allRecipe);

router.get('/fav', recipeController.allFav);

router.get('/sort', recipeController.sortRecipe);

router.get('/:id', recipeController.singleRecipe);

router.put('/:id', recipeController.updateRecipe);

router.delete('/:id', recipeController.deleteRecipe);

router.post('/:id/review', recipeController.reviewRecipe);

router.get('/:id/rev', recipeController.recipeReviews);

router.post('/:id/fav', recipeController.favoriteRecipe);

router.post('/:id/upvote', recipeController.upvote);

router.post('/:id/downvote', recipeController.downvote);

module.exports = router;
