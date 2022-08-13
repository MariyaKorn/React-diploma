import React, { FC }  from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import styles from './Header.module.css';

import Button from '../Button';
import Input from '../Input';
import { Pages } from '../../Pages/Router/Router';
import { Theme, useThemeContext } from '../../Context/themeModeContext';

import userName from '../../Assets/Images/UserName.png';
import logo from '../../Assets/Images/Logo.png';
import user from '../../Assets/Images/User.png';

const Header: FC = () => {
    const auth = localStorage.getItem('uid');

    const navigate = useNavigate();

    const redirect = () => {
        navigate(Pages.SignIn);
    };

    const redirectToMain = () => {
        navigate(Pages.Main);
    };

    const { theme } = useThemeContext();
    const isThemeLight = theme === Theme.Light;

    return (
        <div className={classNames(styles.header)}>
            <img src={logo} alt="logo" onClick={redirectToMain}/>
            <div className={classNames(styles.headerSearch)}>
                <Input type='text' />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            {!auth && (
                <div className={classNames(styles.headerSignIn)}>
                <img src={user} alt="user" onClick={redirect}/>
                <Button title={'Sign In'} onClick={redirect}/>
            </div>
            )}

            {auth && (
            <div className={classNames(styles.headerAuthUser)}>
                <img src={userName} alt="userName" />
                <div>Artem Malkin</div>
            </div>)}
        </div>
    )
};

export default Header;

