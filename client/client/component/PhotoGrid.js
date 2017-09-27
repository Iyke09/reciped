import React from 'react';
import Photo from './Photo';
import { Link } from 'react-router';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12">

            </div>
              {this.props.recipe.map((post, i) => <Photo {...this.props} key={i} i={i} post={post}
               recipe={this.props.recipe}/>)}
          </div>




        </div>
      </div>
    )
  }
});

export default PhotoGrid;
