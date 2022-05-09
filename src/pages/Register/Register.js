import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';


const Register = () => {
    const navigate = useNavigate()
    const [erros, setErros] = useState('');
    // state for disbled button
    const [agree, setAgree] = useState(false);
    let errorElement;
    // sign up with email and password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // updatae user profile name
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    if (error) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }
    if (loading) {
        <p>Loading...</p>;
    }
    if (user) {
        console.log(user)
        navigate('/home')
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password, name);
        // create user
        await createUserWithEmailAndPassword(email, password);
        // update user name
        toast('Profile updated succesfully')
        await updateProfile({ displayName: name });


    };

    return (
        <div className='bg-slate-200'>
            <div className='container mt-4   form-container'>
                <h3 className='text-center text-primary'>Please Register</h3>
                <Form onSubmit={handleRegister} className='form-control'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter your name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Check me out" />
                    </Form.Group>
                    {errorElement}
                    <ToastContainer />
                    <p>Already have an account? <span><Link to='/login' className='text-decoration-none' >Login</Link></span></p>
                    <Button disabled={!agree} className='w-50 mx-auto d-block' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;