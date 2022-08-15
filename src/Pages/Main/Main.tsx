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

import './Main.css';
import { useParams } from 'react-router-dom';

const Main: FC = () => {

    const postsList = useSelector(PostsSelectors.getPosts);
    const post = useSelector(PostsSelectors.getSelectedPost);
    const isPostsLoading = useSelector(PostsSelectors.getPostsLoading);
    
    const dispatch = useDispatch();

    const { id } = useParams<{id:string}>();

    useEffect(() => {
        dispatch(getPosts({
            _limit: 12
        }));
    }, [ ])

    useEffect(() => {
        dispatch(setSelectedPost(id))
    }, [])

    const totalCount = useSelector(PostsSelectors.getTotalAllPostsCounter);
    console.log(totalCount);

    const { theme } = useThemeContext();
    const isThemeLight = theme === Theme.Light;
    
    return (
        <>
        <Header />
        {isPostsLoading ? 
        (<div className={classNames({
            ['loaderLight']: isThemeLight,
            ['loaderDark']: !isThemeLight,
            })} ><Loader /></div>) 
        : (<><div className={classNames({
            ['titleLight']: isThemeLight,
            ['titleDark']: !isThemeLight,
            })}>Blog</div>
        <div className={classNames({
            ['postsContainerLight']: isThemeLight,
            ['postsContainerDark']: !isThemeLight,
            })}>
            {postsList?.map((post: PostDescription) => (
            <PostCard key={post.id} post={post} />))}
        </div></>)}
        <Footer />
        </>
        
    );
};    

export default Main;