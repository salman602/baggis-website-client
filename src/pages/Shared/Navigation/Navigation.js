import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import { HashLink } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">BAGGIES</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="menu-item" to="/home">Home</NavLink>
                        <NavLink className="menu-item" to="/about">About</NavLink>
                        <NavLink className="menu-item" to="/products">Products</NavLink>
                        <NavLink className="menu-item" to="/explore">Explore</NavLink>

                    </Nav>
                    <Nav>
                        <NavLink to="/signup" className="mx-2">
                            <Button className="btn btn-dark rounded-pill">Sign up</Button>
                        </NavLink>



                        {!user?.email ? <NavLink to="/login">
                            <Button className="btn btn-danger rounded-pill">login</Button>
                        </NavLink> : <Button onClick={logOut} className="btn btn-danger rounded-pill">logout</Button>}

                        {user?.email && <div>
                            <img className="rounded-circle mx-2"
                                src={user?.photoURL} alt="" width="40" height="40" />
                            <span className="text-white">{user?.displayName?.split(' ')[0]}</span>
                        </div>}


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;