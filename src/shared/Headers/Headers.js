import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';


const Headers = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <div >

            <Navbar sticky='top' collapseOnSelect expand="lg" className='bg-neutral-500' variant="dark">
                <Container >

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>Home Furniture</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} className='text-decoration-none' to='/blog'>Blogs</Nav.Link>
                            {
                                (user) ?
                                    <Nav.Link as={Link} className='text-decoration-none' to='/manage'>Manage Item</Nav.Link>
                                    : ''
                            }
                            {
                                (user) ?
                                    <Nav.Link as={Link} className='text-decoration-none' to='/add'>Add Item</Nav.Link>
                                    : ''
                            }
                            {
                                (user) ?
                                    <Nav.Link as={Link} className='text-decoration-none' to='/myitem'>My Item</Nav.Link>
                                    : ''
                            }
                            {(user) ?
                                <Nav.Link onClick={handleLogOut} eventKey={2} >
                                    Log out
                                </Nav.Link>

                                : <Nav.Link as={Link} eventKey={2} to="/login">
                                    Log in
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Headers;