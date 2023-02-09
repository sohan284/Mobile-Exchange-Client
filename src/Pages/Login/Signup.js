import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';
import Loading from '../../Shared/Loading';
import {AiFillGooglePlusCircle} from 'react-icons/ai';

const Signup = () => {
    const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const location = useLocation();
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    let errorMessage;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');

    }
    const [token] = useToken(user || gUser)

    const handleSingUp = () => {
        if (/@g(oogle)?mail\.com$/.test(email) && password === cPassword) {
            createUserWithEmailAndPassword(email, password)
        }
    }

    if (token) {
        navigate(from, { replace: true })
    }

    if (error) {
        errorMessage = <p className='text-[red] font-semibold my-3 text-sm'>Please enter valid information.</p>
    }
    if (loading) {
        return <div className='flex justify-center h-screen items-center'>
            <Loading></Loading>
        </div>
    }
    return (
        <div>
            <Header></Header>
           <div className='m-10 p-5'>
           <div className='flex rounded-xl my-10  container mx-auto'>
                <div className='flex my-5 border  bg-white rounded container mx-auto'>
                    <section class="h-screen">
                        <div class="px-6 h-full text-gray-800">
                            <div
                                class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                            >
                                <div
                                    class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                                >
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                        class="w-full"
                                        alt="Sample image"
                                    />
                                </div>
                                <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                                    <form>
                                        <div onClick={signInWithGoogle} class="flex flex-row bg-secondary w-48 items-center button mx-auto justify-center text-primary rounded-xl">
                                            <p class="text-lg mb-0 mr-4">Sign in with</p> <AiFillGooglePlusCircle className='text-5xl py-1'></AiFillGooglePlusCircle>

                                        
                                        </div>

                                        <div
                                            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                        >
                                            <p class="text-center font-semibold mx-4 mb-0">Or</p>
                                        </div>


                                        <input className='w-full my-2 text-black  formInput'
                                            type="text"
                                            value={name}
                                            required
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder='Name' />


                                        <input className='w-full my-2 text-black  formInput'
                                            type="text"
                                            value={email}
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder='Email' />


                                        <input required className='w-full my-2 text-black  formInput'
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder='Password' />

                                        <input className='w-full my-2 text-black  formInput' type="password"
                                            value={cPassword}
                                            required
                                            onChange={(e) => setCPassword(e.target.value)}
                                            placeholder='re-password' />
                                        <div class="text-center  lg:text-left">
                                            <button onClick={() => signInWithGoogle()} className=' button w-full text-white font-bold rounded p-2 mt-1'>Log In</button>
                                            <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                                                Already have an account?
                                                <a onClick={handleLogin}
                                                    href="#!"
                                                    class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                                >Sign in</a
                                                >
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>



            </div>
           </div>
            <Footer></Footer>
        </div>

    );
};

export default Signup;