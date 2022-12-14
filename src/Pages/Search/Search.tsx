import React, { FC }  from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { PostsSelectors } from '../../Redux/reducers/posts';
import { PostDescription } from '../../Types/PostDescription';

import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import PostCard from '../../Components/PostCard';
import Loader from '../../Components/Loader';

import classNames from 'classnames';
import { useThemeContext, Theme } from '../../Context/themeModeContext';
import './Search.css';

const Search: FC = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const postsList = useSelector(PostsSelectors.getPosts);
    const isPostsLoading = useSelector(PostsSelectors.getPostsLoading);

    const { theme } = useThemeContext();
    const isThemeLight = theme === Theme.Light;
    

    return (
        <>
        <Header />
        <div className={classNames({
            ['searchLight']: isThemeLight,
            ['searchDark']: !isThemeLight,
            })}>
        Search results
        {searchParams.get('contains') ? ` '${searchParams.get('contains')}'` : null}

            <div className={classNames({
                ['postsWrapperLight']: isThemeLight,
                ['postsWrapperDark']: !isThemeLight,
                })}>
            {isPostsLoading ? (<div className={classNames({
                ['loaderSearchLight']: isThemeLight,
                ['loaderSearchDark']: !isThemeLight,
                })}><Loader /> </div>) : (postsList
                    ?.filter((post) => post.title.toLowerCase().includes(`${searchParams.get('contains')}`))
                    .map((post: PostDescription) => (
                        <PostCard key={post.id} post={post} />))) 
                }
            </div>
        </div>
        <Footer />
    </>
    );
};

export default Search;