import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />
    const webIcon = <FontAwesomeIcon icon={faGlobe} />
    return (
        <div className="footer-section">
            <Container>
                <Row className="text-white py-4">

                    <Col xs={6} md={3}>
                        <h5 className="mb-3">About MediCare</h5>
                        <p className="text-white-50">MediCare has all the characteristics of a world-class hospital with wide range of services and specialists, equipments , technology and service quality.</p>
                    </Col>
                    <Col xs={6} md={3}>
                        <h5 className="mb-3">Departments</h5>

                        <p className="mb-1">
                            <NavLink to="/orthopedics"
                                className="ps-0 pt-0 text-decoration-none text-white-50">
                                <span>Orthopedics</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/neurology"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Neurology</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/dental"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Dental Care</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/urology"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Urology</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/medicine"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Medicine</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/xray"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Xray & CT Scan</span>
                            </NavLink>
                        </p>
                    </Col>

                    <Col xs={6} md={3}>
                        <h5 className="mb-3">Latest News & Tips</h5>
                        <div className="news-item text-white-50">
                            <h6>Cancer Treatment is Available Now</h6>
                            <p>04th October, 2020</p>
                        </div>
                        <hr />
                        <div className="news-item text-white-50">
                            <h6>Disease Based on Junk Foods</h6>
                            <p>18th January, 2021</p>
                        </div>
                        <hr />
                        <div className="news-item text-white-50">
                            <h6>Hospitality Managements</h6>
                            <p>26th May, 2021</p>
                        </div>
                        <hr />
                    </Col>
                    <Col xs={6} md={3}>
                        <h5 className="mb-3">Contact Details</h5>
                        <div className="text-white-50">
                            <h6 className="">House# 16, Road# 16 Old 27/ Genetic Palaza Dhanmondi, Dhaka, 1209</h6>
                            <p className="text-info">{phoneIcon}
                                <span className="text-white-50"> tell: 123-456-789</span>
                            </p>
                            <p className="text-info">{emailIcon}
                                <span className="text-white-50"> Email: info@medicare.com</span>
                            </p>
                            <p className="text-info">{webIcon}
                                <span className="text-white-50"> Website: https://www.medicare.com</span>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr className="text-white-50" />
            <p className="text-center text-white pb-3">&copy; All rights Reserved By Medicare Ltd.</p>
        </div>
    );
};

export default Footer;