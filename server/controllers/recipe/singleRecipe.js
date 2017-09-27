import jwt from 'jsonwebtoken';
import { Recipe } from '../../models';

const singleRecipe = (req, res) => { // -----------------------------create recipe!
  const decoded = jwt.decode(req.query.token || req.body.token || req.headers.token);
  if (!decoded) {
    return res.status(401).json({
      message: 'you have to be logged in to create recipe',
    });
  }
  Recipe.findOne({ where: { id: req.params.id } })
  .then((recipe) => {
    if (!recipe) {
      return res.status(404).send({
        message: 'recipe Not Found',
      });
    }
    res.status(200).send({
      recipe: recipe,
      message: 'recipe found'
    })
  })
    .catch(error => res.status(500).send(error));
};

export default singleRecipe;




