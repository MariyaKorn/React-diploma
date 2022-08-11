import React, { FC } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import SignUpForm from '../../Components/SignUpForm';

const SignUp: FC = () => {
    return (
        <>
            <Header />
            <SignUpForm />
            <Footer />
        </>
    )
}

export default SignUp;