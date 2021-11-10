import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser } = useAuth();

    const handleInputChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const fullName = `${loginData?.firstName} ${loginData?.lastName}`;
        console.log(fullName)
        registerUser(loginData?.email, loginData?.password, fullName);
    }
    return (
        <div className="my-5">
            <Container>
                <Form
                    onSubmit={handleRegisterSubmit}
                    className="w-25 mx-auto my-4">
                    <Row>
                        <Col>
                            <Form.Control
                                onBlur={handleInputChange}
                                type="text"
                                name="firstName"
                                className="mb-3"
                                placeholder="First name" />

                        </Col>
                        <Col>

                            <Form.Control
                                onBlur={handleInputChange}
                                type="text"
                                name="lastName"
                                className="mb-3"
                                placeholder="last name" />
                        </Col>
                    </Row>
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
                        Register
                    </Button>
                </Form>
                <p>Already Registered? Please Login
                    <NavLink className="text-decoration-none" to="/login"> here</NavLink>
                </p>
            </Container>
        </div>
    );
};

export default Register;