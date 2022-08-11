import React, { FC } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import SignUpForm from '../../Components/SignUpForm';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/reducers/users';
import { useNavigate } from 'react-router-dom';

const SignUp: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
            console.log(user);
            dispatch(
                setUser({ email: user.email, id: user.uid, token: user.refreshToken })
            );
            localStorage.setItem('uid',`${user.uid}`);
            navigate("/main");
            })
            .catch(console.error);
        };
        
    return (
        <>
            <Header />
            <SignUpForm handleSignUpClick={handleRegister} />
            <Footer />
        </>
    )
}

export default SignUp;