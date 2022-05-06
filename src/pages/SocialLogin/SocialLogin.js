import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Init.Firebase';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let setLoad = ""
    let setError = ""
    const handleGoogle = () => {
        signInWithGoogle()
    }
    const navigate = useNavigate()
    if (loading) {
        setLoad = <p className='text-green-600	 fw-bold'>Loading...</p>
    }
    if (error) {
        setError = <p className='text-danger fw-bold'>{error.message}</p>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='text-center mt-4'>
                {setLoad}
                {setError}
                <button onClick={handleGoogle} className='btn btn-info ps-4 pe-3 mb-2'><span></span> Continue With Google </button>
                <br />

                <button className='btn btn-danger'><span></span> Continue With Facebook</button>
            </div>
        </div>
    );
};

export default SocialLogin;