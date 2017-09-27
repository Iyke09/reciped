import jwt from 'jsonwebtoken';
import { Comment } from '../../models';

const recipeReviews = (req, res) => { // -----------------------------create Comment!
  const decoded = jwt.decode(req.query.token || req.body.token || req.headers.token);
  if (!decoded) {
    return res.status(401).json({
      message: 'you have to be logged in to create Comment',
    });
  }
  Comment.findAll({ where: { recipeId: req.params.id } })
  .then((recipe) => {
    if (!recipe) {
      return res.status(404).send({
        message: 'No comments',
      });
    }
    res.status(200).send({
      recipe: recipe,
      message: 'found'
    })
  })
    .catch(error => res.status(500).send(error));
};

export default recipeReviews;




