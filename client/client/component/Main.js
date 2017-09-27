import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
     if(window.location.pathname === '/' && this.props.recipe.length === 0){
       this.props.getRecipes()
     }
     
    // if(window.location.pathname.match(/[1-9]/g) && this.props.single.length === 0){
    //   const { postId } = this.props.params;
    //   this.props.getSingle(postId)
    // }
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
