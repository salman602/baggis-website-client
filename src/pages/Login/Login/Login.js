import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import googleIcon from '../../../assets/icons/google.png';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, signInUsingGoogle } = useAuth();

    const history = useHistory();
    const location = useLocation();


    const handleInputChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    };

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history);
    }

    return (
        <div>
            <Navigation />
            <Container className="my-5">
                <Form
                    onSubmit={handleLoginSubmit}
                    className="w-25 mx-auto my-4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control
                            onBlur={handleInputChange}
                            name="email"
                            type="email"
                            placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control
                            onBlur={handleInputChange}
                            name="password"
                            type="password"
                            placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <div className="my-4">
                    <p>Or login using: </p>
                    <Button onClick={handleGoogleSignIn} variant="link"><img src={googleIcon} alt="" width="50" height="50" /></Button>
                </div>
                <p>New user? Please Register
                    <NavLink className="text-decoration-none" to="/signup"> here</NavLink>
                </p>
            </Container>
            <Footer />
        </div>
    );
};

export default Login;