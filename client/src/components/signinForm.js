import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';

class SigninForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className='signin-form'>
                <Field name='email' type='email' component='input'/>
                <Field name='password' type='password' component='input'/>
                <button>submit</button>
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'SigninForm'
})(SigninForm);

export default SigninForm;