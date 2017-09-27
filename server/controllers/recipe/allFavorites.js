import { Favorite } from '../../models';
import jwt from 'jsonwebtoken';

const allFav = (req, res) => {
  const decoded = jwt.decode(req.query.token || req.body.token || req.headers.token);
  if (!decoded) {
    return res.status(401).json({
      message: 'you have to be logged in to create recipe',
    });
  }
  Favorite.findAll()
    .then(recipe => res.status(200).send(recipe))
    .catch(error => res.status(400).json(error.toString()))
}

export default allFav;
