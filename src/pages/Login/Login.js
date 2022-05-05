import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Init.Firebase';
import Loading from '../../shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorElement;
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
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='bg-stone-400'>
            <div className='container mt-4  form-container '>
                <h3 className='text-center text-primary'>Please Login</h3>
                <Form onSubmit={handleLogin} className='form-control'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <p>New to smart furniture?  <span ><Link className='text-decoration-none' to="/register">REGISTER..</Link></span></p>
                    <p>Forget Password? <span><button className='btn btn-link text-decoration-none'>Reset Password</button></span></p>
                    {errorElement}
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