import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../assets/logo.png';
import './Footer.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Footer = () => {
    return (
        <div className="footer-section">
            <Container>
                <Row className="text-white py-4">

                    <Col xs={6} md={3}>
                        <h5 className="mb-4">CONTACT INFO</h5>
                        <img src={logo} alt="" />
                        <p className="text-white-50 mt-3"><strong>Address:</strong>  Jl. Piit No.1 Sadang Serang, Kec. Coblong, Kota Bandung.</p>
                        <p className="text-white-50"><strong>Phone:</strong><span className="custom-color"> 022-2503530</span></p>
                        <div className="mb-3">
                            <FontAwesomeIcon href="https:facebook.com/baggies" className="mx-2 icon" icon={['fab', 'facebook']} />
                            <FontAwesomeIcon href="https:twitter.com/baggies" className="mx-2 icon" icon={['fab', 'twitter']} />
                            <FontAwesomeIcon href="https:pinterest.com/baggies" className="mx-2 icon" icon={['fab', 'pinterest']} />
                            <FontAwesomeIcon href="https:youtube.com/baggies" className="mx-2 icon" icon={['fab', 'youtube']} />
                            <FontAwesomeIcon href="https:instagram.com/baggies" className="mx-2 icon" icon={['fab', 'instagram']} />
                        </div>

                    </Col>
                    <Col xs={6} md={3}>
                        <h5 className="mb-4">NAVIGATE</h5>

                        <p className="mb-1">
                            <NavLink to="/contactus"
                                className="ps-0 pt-0 text-decoration-none text-white-50">
                                <span>Contact Us</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/blog"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Blog</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/returns"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Shipping & Returns</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/rss"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>RSS Syndication</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/Policy"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Policy</span>
                            </NavLink>
                        </p>

                    </Col>

                    <Col xs={6} md={3}>
                        <h5 className="mb-4">POPULAR BRANDS</h5>
                        <p className="mb-1">
                            <NavLink to="/commongoods"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Common Goods</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/ofs"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>OFS</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/sagaform"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Sagaform</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/Cat"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Cat</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/nuoxiya"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Nuoxiya</span>
                            </NavLink>
                        </p>
                    </Col>
                    <Col xs={6} md={3}>
                        <h5 className="mb-4">SUBSCRIBE TO OUR NEWSLETTER</h5>
                        <p className="ps-0 pt-0 text-white-50 mb-3">Get the latest updates on new products and upcoming sales</p>
                        <Form>
                            <Row>
                                <Col xs={12} md={8}>
                                    <Form.Control placeholder="Your Email Address" />
                                </Col>
                                <Col xs={12} md={4}>
                                    <Button className="button">Subscribe</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <hr className="text-white-50" />
            <p className="text-center text-white">Powered By <span className="custom-color">NicheCommerce</span></p>
            <p className="text-center text-white pb-3">&copy; Reserved By BAGGIES Ltd.</p>
        </div>
    );
};

export default Footer;