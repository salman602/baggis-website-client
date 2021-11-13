import React from 'react';
import { Button, Carousel, Container, Col, Row } from 'react-bootstrap';
import img1 from '../../../assets/banner1.png';
import img2 from '../../../assets/banner2.png';
import img3 from '../../../assets/banner3.png';



const Banner = () => {
    return (
        <Carousel variant="dark">

            <Carousel.Item>
                <Container>
                    <Row>
                        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                            <div>
                                <h2>STYLISH BACKPACK</h2>
                                <h5 className="my-3">Browse your backpack now.</h5>
                                <Button className="button">Browse Now</Button>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <img className="mw-100 rounded" src={img2} alt="" height="95%" />
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item >
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <img className="mw-100 rounded" src={img3} alt="" height="95%" />
                        </Col>
                        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                            <div>
                                <h2>STYLISH BACKPACK</h2>
                                <h5 className="my-3">Browse your backpack now.</h5>
                                <Button className="button">Browse Now</Button>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item >
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <img className="mw-100 rounded" src={img1} alt="" height="95%" />
                        </Col>
                        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                            <div>
                                <h2>STYLISH BACKPACK</h2>
                                <h5 className="my-3">Browse your backpack now.</h5>
                                <Button className="button">Browse Now</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;


