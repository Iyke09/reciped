import React, { Component } from 'react';

const signup = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    this.props.addUser(name, email, password);
    this.refs.userForm.reset();
  },
  render() {
    const errorMessage = this.props.error.pop();
    console.log(errorMessage)
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
            <div className="card">
                <div className="card-body mx-4">
                  <form className="form-elegant" ref="userForm" onSubmit={this.handleSubmit}>
                <p className="h5 text-center mb-4">Sign up</p>
                    <h6 className="text-center" style={{color: 'red'}}>{ errorMessage }</h6>
                    <div className="md-form">
                        <i className="fa fa-user prefix grey-text"></i>
                        <input type="text" id="orangeForm-name" className="form-control" 
                        ref="name" placeholder="Your username"/>
                    </div>
                    <div className="md-form">
                        <i className="fa fa-envelope prefix grey-text"></i>
                        <input type="text" id="orangeForm-email" className="form-control" 
                        ref="email" placeholder="Your email"/>
                    </div>
                
                    <div className="md-form">
                        <i className="fa fa-lock prefix grey-text"></i>
                        <input type="password" id="orangeForm-pass" className="form-control" ref="password" 
                        placeholder="Your password"/>
                    </div>
                
                    <div className="text-center">
                        <button className="btn btn-deep-orange btn-rounded btn-block">Sign up</button>
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
