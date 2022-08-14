import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, PostsSelectors, setSelectedPost, setTotalAllPostsCounter } from '../../Redux/reducers/posts';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import PostCard from '../../Components/PostCard';
import Loader from '../../Components/Loader';

import classNames from 'classnames';
import { useThemeContext, Theme } from '../../Context/themeModeContext';
import { PostDescription } from '../../Types/PostDescription';

import styles from './Main.module.css';
import { useParams } from 'react-router-dom';

const Main: FC = () => {

    const postsList = useSelector(PostsSelectors.getPosts);
    const post = useSelector(PostsSelectors.getSelectedPost);
    const isPostsLoading = useSelector(PostsSelectors.getPostsLoading);
    const totalCount = useSelector(PostsSelectors.getTotalAllPostsCounter);
    const dispatch = useDispatch();
    console.log(totalCount);
    const { id } = useParams<{id:string}>();

    useEffect(() => {
        dispatch(getPosts({
            _limit: 12
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
        {isPostsLoading ? 
        (<div className={classNames(styles.loader)}><Loader /></div>) 
        : (<><div className={classNames(styles.title)}>Blog</div>
        <div className={classNames(styles.postsContainer)}>
            {postsList?.map((post: PostDescription) => (
            <PostCard key={post.id} post={post} />))}
        </div></>)}
        <Footer />
        </>
        
    );
};    

export default Main;