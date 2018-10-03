import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMessage, signUp } from '../actions';

import SignupForm from './signupForm';

class Signup extends Component {
  
  onSignup = (fields) => {
    console.log('trying to sign up with fields: ', fields);
    this.props.signUp(fields);
  }

  render() {
    return (
      <div className='app'>
        <SignupForm onSubmit={this.onSignup}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    message: state.message.message
  }
}

Signup = connect(mapStateToProps, {fetchMessage, signUp})(Signup);

export default Signup;
