import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, PostsSelectors } from '../../Redux/reducers/posts';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import MainPage from '../../Components/MainPage';

import classNames from 'classnames';
import { useThemeContext, Theme } from '../../Context/themeModeContext';
import { PostDescription } from '../../Types/PostDescription';

import styles from './Main.module.css';

const Main: FC = () => {

    const postsList = useSelector(PostsSelectors.getPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts({}))
    }, [])

    const { theme } = useThemeContext();

    const isThemeLight = theme === Theme.Light;
    
    return (
        <>
        <Header />
        <div>Blog</div>
        <div className={classNames(styles.postsContainer)}>
            {postsList?.map((post: PostDescription) => (
            <MainPage key={post.id} post={post} />))}
        </div>
        <Footer />
        </>
        
    );
};    

export default Main;