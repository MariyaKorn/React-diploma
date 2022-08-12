import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import styles from './SignInForm.module.css';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { Pages } from '../../Pages/Router/Router';


export interface SignInFormProps {
    handleSignInClick: (email: string, password: string) => void;
};

const SignInForm: FC<SignInFormProps> = ({ handleSignInClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    const redirect = () => {
        navigate(Pages.SignUp);
    };

    return (
        <div className={classNames(styles.signInWrapper)}>
            <h1>Sign In</h1>

            <div>
                <div className={classNames(styles.signInForm)}>
                    <div>Email</div>

                    <Input type='email' 
                    className={classNames(styles.signInFormInput)} 
                    placeholder='Your Email'
                    value={email}
                    onChange={(event: any) => setEmail(event.target.value)} />

                    <div>Password</div>

                    <Input type='password' 
                    className={classNames(styles.signInFormInputPassword)} 
                    placeholder='Your Password'
                    value={password}
                    onChange={(event: any) => setPassword(event.target.value)} />

                    <Button title={'Forgot Password?'} 
                    className={classNames(styles.formButtonForgot)} />

                    <Button title={'Sign In'} 
                    className={classNames(styles.formButtonSignIn)}
                    onClick={() => handleSignInClick(email, password)} />

                    <p>Don't have an account? <Button title={'Sign Up'} 
                    onClick={redirect}
                    className={classNames(styles.formButtonSignUp)}/> </p>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;