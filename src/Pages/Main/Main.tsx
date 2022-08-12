import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, PostsSelectors, setSelectedPost } from '../../Redux/reducers/posts';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import PostCard from '../../Components/PostCard';

import classNames from 'classnames';
import { useThemeContext, Theme } from '../../Context/themeModeContext';
import { PostDescription } from '../../Types/PostDescription';

import styles from './Main.module.css';
import { useParams } from 'react-router-dom';

const Main: FC = () => {

    const postsList = useSelector(PostsSelectors.getPosts);
    const post = useSelector(PostsSelectors.getSelectedPost)
    const dispatch = useDispatch();
    const { id } = useParams<{id:string}>();

    useEffect(() => {
        dispatch(getPosts({
            _limit: 30,
            _sort: '',
            _start: 0,
        }));
    }, [ ])

    useEffect(() => {
        dispatch(setSelectedPost(id))
    }, [])

    const { theme } = useThemeContext();

    const isThemeLight = theme === Theme.Light;
    
    return (
        <>
        <Header />
        <div className={classNames(styles.title)}>Blog</div>
        <div className={classNames(styles.postsContainer)}>
            {postsList?.map((post: PostDescription) => (
            <PostCard key={post.id} post={post} />))}
        </div>
        <Footer />
        </>
        
    );
};    

export default Main;