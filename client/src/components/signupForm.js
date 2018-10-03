import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';

class SignupForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className='signup-form'>
                <Field name='email' type='email' component='input'/>
                <Field name='password' type='password' component='input'/>
                <button>submit</button>
            </form>
        )
    }
}

SignupForm = reduxForm({
    form: 'SignupForm'
})(SignupForm);

export default SignupForm;