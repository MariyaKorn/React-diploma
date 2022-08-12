import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import styles from './Home.module.css';
import classNames from 'classnames';

const Home: FC = () => {
    
    return (
        <>
            <Header />
            <div className={classNames(styles.homeWrapper)}>
                <h1>Welcome to BLOGOLOGO!</h1> 
                <Link to='./signIn' className={classNames(styles.link)}>Sign In, please.</Link>
            </div>
            <Footer />
        </>
    );
};

export default Home;