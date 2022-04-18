import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faGoogle, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSignInWithGithub, useSignInWithFacebook, useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, signInError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, userFacebook, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
    const navigate = useNavigate();

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = (event) => {
        event.preventDefault();
        if (email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                if (password.length > 7) {
                    signInWithEmailAndPassword(email, password);
                }
                else {
                    toast.error("Please enter a password with more than 7 character", { id: "password error" });
                }
            }
            else {
                toast.error("Please enter a valid email!", { id: "validEmail" });
            }
        }
        else {
            toast.error("Please input email and password!", { id: "error" });
        }
    }

    const handleGoogleLogin = () => {
        signInWithGoogle();
    }

    const handleGithubLogin = () => {
        signInWithGithub();
    }
    const handleFacebookLogin = () => {
        signInWithFacebook();
    }
    const handlePasswordReset = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success("Password reset email sent!", { id: "resetEmailSent" });
        }
        else {
            toast.error("Please provide an email!", { id: "resetEmail" });
        }
    }

    if (signInError) {
        toast.error(`${signInError}`, { id: "signInError" });
    }
    if (resetError) {
        toast.error(`${resetError}`, { id: "resetError" });
    }
    if (user || userGoogle || userFacebook || userGithub) {
        toast.success("Login Successful", { id: "login" })
        navigate(from, { replace: true });
    }


    return (
        <div className='min-h-[700px]'>
            <div className='mt-10'>
                <div className="bg-white mx-auto w-full md:w-2/3 lg:w-1/3 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input onBlur={handleEmailBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input onBlur={handlePasswordBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" />
                        </div>
                        <div className="flex items-center justify-between">
                            <input className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Log In">
                            </input>
                            <button onClick={handlePasswordReset} className="inline-block align-baseline font-bold text-sm text-blue-900 hover:text-blue-700" type='button' >
                                Forgot Password?
                            </button>
                        </div>
                        <div className='flex py-2 items-center'>
                            <p className="text-xs italic">New to GymWhale?</p>
                            <Link to='/register' className='px-2 text-blue-900 hover:text-blue-700' >Please Register</Link>
                        </div>
                    </form>
                    <div className='py-4 flex justify-center items-center'>
                        <hr className='w-1/3 border-2 border-gray-300' />
                        <p className='px-4 py-2'>Or</p>
                        <hr className='w-1/3 border-2 border-gray-300' />
                    </div>
                    <div className='flex justify-evenly'>
                        <button onClick={handleGoogleLogin} className='p-4 border border-blue-900 rounded-lg' type='button'>
                            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                            <p>Google</p>
                        </button>
                        <button onClick={handleGithubLogin} className='p-4 border border-blue-900 rounded-lg' type='button'>
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            <p>Github</p>
                        </button>
                        <button onClick={handleFacebookLogin} className='p-4 border border-blue-900 rounded-lg' type='button'>
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                            <p>Facebook</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;