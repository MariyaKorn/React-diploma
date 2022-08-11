import React, { FC } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import SignInForm from '../../Components/SignInForm';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/reducers/users';
import { useNavigate } from 'react-router-dom';

const SignIn: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
            console.log(user);
            dispatch(
                setUser({ email: user.email, id: user.uid, token: user.refreshToken })
            );
            navigate("/main");
            })
            .catch(() => alert("This user is not registered. Sign Up, please!"));
        };

    return (
        <>
            <Header />
            <SignInForm handleSignInClick={handleLogin} />
            <Footer />
        </>
    )
}

export default SignIn;