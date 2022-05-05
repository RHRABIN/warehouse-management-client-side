import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Init.Firebase';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogle = () => {
        signInWithGoogle()
    }
    return (
        <div>
            <div className='text-center mt-4'>
                <button onClick={handleGoogle} className='btn btn-info ps-4 pe-3 mb-2'><span></span> Continue With Google</button>
                <br />
                <button className='btn btn-danger'><span></span> Continue With Facebook</button>
            </div>
        </div>
    );
};

export default SocialLogin;