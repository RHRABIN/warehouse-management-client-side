import { React, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // reset password 
    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth)
    let errorElement = ""
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    if (loading) {
        <Loading></Loading>
    }
    if (error) {
        errorElement = <p className='text-danger'>{error.message}</p>
    }
    if (user) {
        navigate(from, { replace: true })
    }
    // login with email & password
    const handleLogin = async (event) => {
        errorElement = "";
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://sheltered-tundra-55325.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
        console.log(data)
        navigate(from, { replace: true })
    }
    // handle reset password
    const handleReset = async (event) => {
        errorElement = "";
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('sent reset password your email')
        }
        else {
            toast('please enter email')
        }

    }
    return (
        <div className='bg-slate-200 '>
            <div className='container mt-4  form-container mb-4'>
                <h3 className='text-center text-primary'>Please Login</h3>
                <Form onSubmit={handleLogin} className='form-control'>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" ref={emailRef} name='email' id='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} id='password' name='password' placeholder="Password" />
                    </Form.Group>
                    <p>New to smart furniture?  <span ><Link className='text-decoration-none' to="/register">REGISTER..</Link></span></p>
                    <p>Forget Password? <span><button onClick={handleReset} className='btn btn-link text-decoration-none'>Reset Password</button></span></p>
                    {errorElement}
                    <ToastContainer />
                    <Button className='w-50 mx-auto d-block' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
            <div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;