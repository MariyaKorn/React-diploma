import React, { FC } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import SignInForm from '../../Components/SignInForm';

const SignIn: FC = () => {

    return (
        <>
            <Header />
            <SignInForm />
            <Footer />
        </>
    )
}

export default SignIn;