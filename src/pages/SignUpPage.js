import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { AuthContext } from '../store/authContext';

function SignUpPage() {
  const AuthCtx = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const { user } = await result;
    AuthCtx.login(user);
  };
  return (
    <main className="flex flex-col justify-center h-screen  md:grid md:grid-cols-5 lg:grid-cols-3">
      <section className="hidden md:block md:col-span-2 lg:col-span-1  bg-primary h-screen">
        <div className="flex flex-col h-full justify-center items-center text-white text-5xl font-bold">
          <h1 className="font-heading">Dash.</h1>
        </div>
      </section>
      <section className="md:col-span-3 lg:col-span-2">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="max-w-[80%] md:max-w-[60%] lg:max-w-[40%] xl:max-w-[35%]">
            <div>
              <div>
                <h1 className="text-3xl font-bold font-heading">
                  Create an account
                </h1>
                <h3 className="text-sm font-semibold mt-1">
                  Create an account to use dashboard
                </h3>
              </div>
              <div className="flex items-center justify-between my-5 gap-2">
                <button
                  onClick={handleGoogleSignIn}
                  className="bg-white rounded-xl py-1 flex justify-between items-center px-3 gap-2 hover:shadow-md transition-all duration-100 ease-in-out"
                >
                  <p>
                    <i className="fa-brands fa-google"></i>
                  </p>
                  <p className="text-secondaryText text-xs font-heading">
                    Sign up with Google
                  </p>
                </button>
                <button className="bg-white rounded-xl py-1 flex justify-between items-center px-3 gap-2">
                  <p className="text-secondaryText">
                    <i className="fa-brands fa-apple"></i>
                  </p>
                  <p className="text-secondaryText text-xs font-heading">
                    Sign up with Apple
                  </p>
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <form>
                <div className="flex gap-5 mb-4 justify-between">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="px-3 py-1 bg-background rounded-xl outline-none focus:bg-fieldColor w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="px-3 py-1 bg-background rounded-xl outline-none focus:bg-fieldColor w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  <label htmlFor="">Email address</label>
                  <input
                    type="text"
                    placeholder="abc@gmail.com"
                    className="px-3 py-1 bg-background rounded-xl outline-none focus:bg-fieldColor w-full"
                  />
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="px-3 py-1 bg-background rounded-xl outline-none focus:bg-fieldColor w-full"
                  />
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="px-3 py-1 bg-background rounded-xl outline-none focus:bg-fieldColor w-full"
                  />
                </div>

                <div className="mb-4">
                  <p className="flex items-center">
                    <input
                      type={'checkbox'}
                      className="h-3 w-3 checked:bg-primary"
                    />
                    &nbsp;I agree the&nbsp;
                    <Link to="/tandc" className="text-link">
                      terms and conditions
                    </Link>
                  </p>
                </div>
                <div>
                  <button className="w-full bg-primary py-2 font-semibold text-white rounded-xl font-heading">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <div className="my-4 text-md text-center">
              <p className="text-secondaryText">
                Already have an account?&nbsp;
                <Link className="text-link" to="/signin">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUpPage;
