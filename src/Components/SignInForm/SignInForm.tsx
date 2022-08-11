import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './SignInForm.module.css';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';
import { Pages } from '../../Pages/Router/Router';

const SignInForm: FC = () => {
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
                        placeholder='Your Email' />

                        <div>Password</div>

                        <Input type='password' 
                        className={classNames(styles.signInFormInputPassword)} 
                        placeholder='Your Password'/>

                        <Button title={'Forgot Password?'} 
                        className={classNames(styles.formButtonForgot)}/>

                        <Button title={'Sign In'} 
                        className={classNames(styles.formButtonSignIn)}/>

                        <p>Don't have an account? <Button title={'Sign Up'} onClick={redirect}
                        className={classNames(styles.formButtonSignUp)}/> </p>
                    </div>
                </div>
            </div>
    )
}

export default SignInForm;