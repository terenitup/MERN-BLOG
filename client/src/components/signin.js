import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn } from '../actions';

import SigninForm from './signinForm';

class Signin extends Component {
  
  onSignin = (fields) => {
    console.log('trying to sign in with fields: ', fields);
    this.props.signIn(fields);
  }

  render() {
    return (
      <div className='app'>
        <SigninForm onSubmit={this.onSignin}/>
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

Signin = connect(mapStateToProps, {signIn})(Signin);

export default Signin;
