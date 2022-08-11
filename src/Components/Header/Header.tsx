import React, { FC }  from 'react';
import classNames from 'classnames';
import styles from './Header.module.css';
import logo from '../../Assets/Images/Logo.png';
import user from '../../Assets/Images/User.png';
import Button from '../Button';
import Input from '../Input';
import { useNavigate } from 'react-router-dom';
import { Pages } from '../../Pages/Router/Router';

const Header: FC = () => {
    const navigate = useNavigate();

    const redirect = () => {
        navigate(Pages.SignIn);
    };

    return (
        <div className={classNames(styles.header)}>
            <img src={logo} alt="logo" />
            <div className={classNames(styles.headerSearch)}>
                <Input type='text' />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            
            <div className={classNames(styles.headerSignIn)}>
                <img src={user} alt="user" onClick={redirect}/>
                <Button title={'Sign In'} onClick={redirect}/>
            </div>
        </div>
    )
};

export default Header;

