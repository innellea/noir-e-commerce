import React, { useState } from 'react';

import { connect } from 'react-redux';

import swal from 'sweetalert';

import GoogleButton from '../GoogleButton/GoogleButton';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/forum-input';
import {
    googleSignInStart,
    emailSignInStart,
} from '../../redux/user/users.actions';

import {
    SignInButtonsContainer,
    SignInContainer,
    TitleContainer,
} from './Signin.styles';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        emailSignInStart(email, password);
    };

    const handleChange = ({ target: { name, value } }) => {
        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignInContainer>
            <TitleContainer>I already have an account</TitleContainer>
            <span>Sign In with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                />
                <SignInButtonsContainer>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <GoogleButton type='button' onClick={googleSignInStart}>
                        Sign in With Google
                    </GoogleButton>
                </SignInButtonsContainer>
            </form>
            <h3>Trial Credentials:</h3>
            <p>guest@localhost.com</p>
            <p>guest123</p>
        </SignInContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
