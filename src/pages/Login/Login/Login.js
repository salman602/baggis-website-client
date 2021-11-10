import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser } = useAuth();


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
        loginUser(loginData.email, loginData.password)
    }
    return (
        <div className="my-5">
            <Container>
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
                <p>New user? Please Register
                    <NavLink className="text-decoration-none" to="/signup"> here</NavLink>
                </p>
            </Container>
        </div>
    );
};

export default Login;