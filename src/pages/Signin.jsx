import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleprovider, facebookProvider, twitterProvider, githubProvider } from '../firebase/setup';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleprovider);
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const facebookSignIn = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const twitterSignIn = async () => {
    try {
      await signInWithPopup(auth, twitterProvider);
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const githubSignIn = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div className="container items-center p-3 my-5 d-flex flex-column w-50" style={{ minWidth: '300px' }}>
      <div className="my-3 font-extrabold text-center font-2xl">
        <h2>Sign in</h2>
      </div>

      {/* Error Message */}
      {error && <div className="text-center alert alert-danger">{error}</div>}

      <button
        type="submit"
        className="pt-10 btn btn-primary"
        onClick={googleSignIn}
      >
        Sign in with Google
      </button>

      <div className="mt-4 text-center">
        <p>Not a member? <a href="/register">Register</a></p>
        <p>or sign up with:</p>

        <div className="mx-auto d-flex justify-content-between" style={{ width: '40%' }}>
          <button type="button" className="m-1 btn btn-light" onClick={facebookSignIn}>
            <i className="bi bi-facebook"></i>
          </button>

          <button type="button" className="m-1 btn btn-light" onClick={twitterSignIn}>
            <i className="bi bi-twitter"></i>
          </button>

          <button type="button" className="m-1 btn btn-light" onClick={googleSignIn}>
            <i className="bi bi-google"></i>
          </button>

          <button type="button" className="m-1 btn btn-light" onClick={githubSignIn}>
            <i className="bi bi-github"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
