import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  componentWillMount(){
    const { postId } = this.props.params;
    this.props.getSingle(postId)
  },
  render() {
    // if(window.location.pathname.match(/[1-9]/g) && this.props.single.length === 0){
    //   const { postId } = this.props.params;
    //   this.props.getSingle(postId)
    // }
    const single = this.props.single.pop();
    const time = single.updatedAt.slice(0, single.updatedAt.indexOf('T'))
    console.log(single)
    return (
      <div className="">
      <div className="row">
        <div className="">
        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-7">
          <img src={single.image} alt={single.title} className=""  />
        </div>
        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-5">
          <div className="text-center">
           <small className="red-text">{single.category}</small>
           <p className="grey-text" style={{fontSize: 12}}>by @janeDoe   <span><i className="fa fa-clock-o"></i> {time}</span></p>
          <h2>{single.title}</h2>
          <p>{single.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie, 
            velit in tempus viverra, tortor risus accumsan massa, vel vestibulum quam augue id lectus.</p>
          <br/>
          </div>
          {this.props.comment.map((coment) => 
            <p style={{fontSize: 14}}> 
              <strong className="blue-text">{coment.email}</strong> {coment.content}
              {/* <button className="remove-comment" 
              onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button> */}
            </p>
          )}


          <form className="col-sm-12 col-xs-12 text-center">
            <h3>Leave A Comment</h3>
            <div className="row">
              <div className="input-field col-sm-12 col-xs-12 col-md-12 col-lg-12">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" className="validate"/>
                
              </div>
              <div className="input-field col-sm-12 col-xs-12 col-md-12 col-lg-12">
              <i className="material-icons prefix">mail</i>
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                
              </div>
            </div>
            <button className="btn btn-primary red" 
        >click</button>
          </form>
        </div>
      </div>
      </div>
      {/* <Photo i={i} post={post} {...this.props} />
      <Comments postComments={postComments} {...this.props}/> */}
    </div>
    )
  }
});

export default Single;
