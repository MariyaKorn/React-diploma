import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './SignUpForm.module.css';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';
import { Pages } from '../../Pages/Router/Router';

const SignUpForm: FC = () => {
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
                        placeholder='Your Email' />

                        <div>Password</div>

                        <Input type='password' 
                        className={classNames(styles.signUpFormInputPassword)} 
                        placeholder='Your Password'/>

                        <Button title={'Sign Up'} 
                        className={classNames(styles.formButtonSignUp)}/>

                        <p>Already have an account? <Button title={'Sign In'} onClick={redirect}
                        className={classNames(styles.formButtonSignIn)}/></p>
                    </div>
                </div>
            </div>
    )
}

export default SignUpForm;