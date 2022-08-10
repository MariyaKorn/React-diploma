import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getPosts, PostsSelectors } from '../../Redux/reducers/posts';
import { useThemeContext, Theme } from '../../Context/themeModeContext';

import Button from '../../Components/Button';
// import Main from '../Main';
// import SignIn from '../SignIn';
// import Home from '../Home';
// import SignUp from '../SignUp';

const MockComponent = () => {
    const postsList = useSelector(PostsSelectors.getPosts);

    console.log(postsList);

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(
            getPosts({
                search: " ",
                limit: 10,
                offset: 0,
                ordering: "date",
            })
        );
    };

    const { theme, onChangeTheme = () => {} } = useThemeContext();
    const onClickTheme = () => {
        const themeValue = theme === Theme.Light ? Theme.Dark : Theme.Light;
        onChangeTheme(themeValue);
    }

    return (
        <div> 
            <Button title={'GET POSTS LIST'} onClick={onClick}/>
            <Button title={ theme } onClick={onClickTheme}/>
        </div>
    );
};

export enum Pages {
    Home = '/',
    Main = '/main',
    Content = '/content',
    Search = '/search',
    SignIn = '/signIn',
    SignUp = '/signUp'
};

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path={Pages.Home} element={<Home />} />
                <Route path={Pages.Main} element={<Main />} /> */}
                <Route path={Pages.Content} element={<MockComponent />} />
                <Route path={Pages.Search} element={<MockComponent />} />
                {/* <Route path={Pages.SignIn} element={<SignIn />} />
                <Route path={Pages.SignUp} element={<SignUp />} /> */}
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
