import React, { Component } from 'react';

const signup = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const recipe = this.props.edit[0]
    const title = this.refs.title.value;
    const image = this.refs.image.value;
    const category = this.refs.category.value;
    const description = this.refs.description.value;
    this.props.editRecipex(recipe.id,title, image, category, description);
    // this.refs.addForm.reset();
  },
  render() {
    const errorMessage = this.props.error.pop();
    const recipe = this.props.edit[0]
    console.log(errorMessage)
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
            <div className="card">
                <div className="card-body mx-4">
                  <form className="form-elegant" ref="addForm" onSubmit={this.handleSubmit}>
                    <p className="h5 text-center mb-4">Edit Recipe</p>
                    <h6 className="text-center" style={{color: 'red'}}>{ errorMessage }</h6>
                    <div className="md-form">
                        <input type="text" id="orangeForm-name" className="form-control" 
                        ref="title" placeholder="Title" defaultValue={recipe.title}/>
                    </div>
                    <div className="md-form">
                        <input type="text" id="orangeForm-email" className="form-control" 
                        ref="image" placeholder="Image_Url" defaultValue={recipe.image}/>
                    </div>
                    
                    <div className="md-form">
                        <input type="text" id="orangeForm-pass" className="form-control" ref="category" 
                        placeholder="Category" defaultValue={recipe.category}/>
                    </div>
                    <div className="md-form">
                        <input type="text" id="orangeForm-pass" className="form-control" ref="description" 
                        placeholder="Discription" defaultValue={recipe.description}/>
                    </div>
                
                    <div className="text-center">
                        <button className="btn btn-deep-orange btn-rounded btn-block">edit Recipe</button>
                    </div>
                    </form>
                </div>
            </div>
         </div>
      </div>
        
    )
  }
});

export default signup;
