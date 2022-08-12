import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import styles from './SignUpForm.module.css';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { Pages } from '../../Pages/Router/Router';

export interface SignUpFormProps {
    handleSignUpClick: (email: string, password: string) => void;
};

const SignUpForm: FC<SignUpFormProps> = ({handleSignUpClick}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const redirect = () => {
        navigate(Pages.SignIn);
    };

    return (
        <div className={classNames(styles.signUpWrapper)}>
            <h1>Sign Up</h1>

            <div>
                <div className={classNames(styles.signUpForm)}>
                    <div>Email</div>

                    <Input type='email' 
                    className={classNames(styles.signUpFormInput)} 
                    placeholder='Your Email (must contain a character @)'
                    value={email}
                    onChange={(event: any) => setEmail(event.target.value)} />

                    <div>Password</div>

                    <Input type='password' 
                    className={classNames(styles.signUpFormInputPassword)} 
                    placeholder='Your Password (should be at least 6 characters)'
                    value={password}
                    onChange={(event: any) => setPassword(event.target.value)} />

                    <Button title={'Sign Up'} 
                    className={classNames(styles.formButtonSignUp)}
                    onClick={() => handleSignUpClick(email, password) } />

                    <p>Already have an account? <Button title={'Sign In'} 
                    onClick={redirect}
                    className={classNames(styles.formButtonSignIn)}/></p>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;