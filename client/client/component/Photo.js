import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import jwt from 'jsonwebtoken';

const Photo = React.createClass({
    eventHandler(e, val) {
        $(`#${e}`).hide(1000);
        this.props.deleteRecipe(e);
    },
  render() {
    const { post, i, comments } = this.props;
    const user = localStorage.getItem('token')
    const decoded = jwt.decode(user);
    const check = this.props.error.pop();
    const time = post.updatedAt.slice(0, post.updatedAt.indexOf('T'))
    const recipeId = this.props.recipe.map((recipe) => recipe.id)
    const fav = (id) => {
        let result = [];
        let result2 = []
        for(let fav of this.props.favorite){
            for (let x in fav){
                if(x === 'userId' && fav[x] === decoded.user.id){
                   result.push(fav)
                }
            }
        }
        for(let x of result){
            result2.push(x.recipeId)
        }
        if(result2.indexOf(id) !== -1){
            return true
        }else{
            return false
        }
    }
    const auth = (id) => {
        if(decoded.user.id !== id){
            return true;
        }else{
            return false;
        }
    }
    const recipe = check === true && check.id === post.id && post.favUser.indexOf(decoded.user.email) !== -1
    return ( 
        <div className="col-sm-12 col-md-6 col-xs-12 col-lg-4" id={post.id}>
            <div className="card hoverable">
                <div className="card-image">
                    <img src={post.image} alt={post.title} className="img" style={{height: 250}} />
                    <span className=" rightalign">
                        <a className="btn-floating waves-effect waves-light " 
                            style={ fav(post.id) ? {backgroundColor: 'red'} : {backgroundColor: 'teal'} } id={post.id}>
                            <i className="fa fa-heart"
                            onClick={ this.props.favRecipe.bind(null, post.id) }>
                            </i>
                        </a>
                    </span>
                    <span className=" rightalign2">
                    <a className="btn-floating waves-effect waves-light red">
                    <i className="material-icons">share</i></a>
                    </span>

                    <span className=" rightalign3">
                    <a className="btn-floating waves-effect waves-light red">
                    <i className="material-icons" 
                    onClick={ this.props.editRecipe.bind(null, post.id)}>edit</i>
                    </a>
                    </span>
                    
                    <span className=" rightalign4">
                    <a className="btn-floating waves-effect waves-light red" disabled={auth(post.userId)}>
                    <i className="material-icons" 
                     onClick={this.eventHandler.bind(null, post.id)}>delete</i></a>
                    </span>
                    <Link to={`/view/${post.id}`}>
                        <span>
                            <a className="btn-floating halfway-fab waves-effect waves-light black">
                                <i className="fa fa-chevron-right"></i>
                            </a>
                        </span>
                    </Link>
                </div>
                <div className="card-content center">
                    <small className="red-text"><i className="fa fa-cutlery"></i> {post.category}</small>
                    <span className="card-title"><a href="detail.html">{post.title}</a></span>
                    <small className="grey-text">by @janeDOE</small>
                    <p>{post.description}</p>
                </div>
                <div className="black white-text center paradiv">
                    <p className="white-text para"><span ><i className="fa fa-clock-o"></i> {time}</span> 
                    
                    <span className="span"><a><i className="fa fa-comments-o" style={{marginRight : 2}}></i>12</a></span> 
                    
                    
                    <span className="span"><a onClick={ this.props.upvote.bind(null, post.id) }>
                        <i className="fa fa-thumbs-up" style={{marginRight : 2}}> </i>{post.upvote}</a></span>

                    <span className="span"><a onClick={ this.props.downvote.bind(null, post.id) }>
                        <i className="fa fa-thumbs-down" style={{marginRight : 2}}> </i>{post.downvote}</a></span>

                    <span className="span"><a><i className="fa fa-twitter" style={{marginRight : 2}}> </i>5</a></span>
                    </p>
                </div>
            </div>
        </div>
    )
  }
});

export default Photo;
