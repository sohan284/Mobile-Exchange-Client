import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';
import Loading from '../../Shared/Loading';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  let errorMessage;
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  let from = location.state?.from?.pathname || "/";

  const handleSignup = () => {
    navigate('/signup');

  }
  if (user) {
    navigate(from, { replace: true });

  }
  if (error) {
    errorMessage = <p className='text-[red] my-3 font-semibold text-xs'>Email or password you've entered is incorrect.</p>
  }
  if (loading) {
    return <div className='flex justify-center h-screen items-center'>
      <Loading></Loading>
    </div>
  }
  return (
    <div>
      <Header></Header>
      <div className='m-5 p-5'>
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
                  

                    <div
                      class="flex items-center my-10 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                    >
                      <p class="text-center text-xl font-semibold mx-4 mb-0">Log in</p>
                    </div>


                    <div class="mb-6">
                      <input className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                      />
                    </div>


                    <div class="mb-6">
                      <input className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password' />
                    </div>




                    <div class="text-center  lg:text-left">
                      <button onClick={() => signInWithEmailAndPassword(email, password)} className=' button w-full text-white font-bold rounded p-2 mt-1'> Login</button>
                      <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                        Don't have an account?
                        <a onClick={handleSignup}
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
      <Footer></Footer>
    </div>
  );
};

export default Login;