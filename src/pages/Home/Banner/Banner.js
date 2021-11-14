import React from 'react';
import { Button, Carousel, Container, Col, Row } from 'react-bootstrap';
import img4 from '../../../assets/banner4.jpg';
import img5 from '../../../assets/banner5.jpg';
import img6 from '../../../assets/banner6.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <Carousel variant="dark">

            <Carousel.Item>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <img className="mw-100 rounded" src={img4} alt="" height="95%" />

                            <Carousel.Caption className="banner-section mb-3">
                                <h5 className="text-muted">Winter Mega Sale</h5>
                                <h1>THE BAG</h1>
                                <Button className="button">Save upto 50% Off</Button>
                            </Carousel.Caption>

                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item >
                <Container>
                    <Row>

                        <Col xs={12} md={12}>
                            <img className="mw-100 rounded" src={img5} alt="" height="95%" />
                            <Carousel.Caption className="banner-section mb-3">
                                <h5 className="text-muted">Winter Mega Sale</h5>
                                <h1>THE BAG</h1>
                                <Button className="button">Save upto 50% Off</Button>
                            </Carousel.Caption>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item >
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <img className="mw-100 rounded" src={img6} alt="" height="95%" />
                            <Carousel.Caption className="banner-section mb-3">
                                <h5 className="text-muted">Winter Mega Sale</h5>
                                <h1>THE BAG</h1>
                                <Button className="button">Save upto 50% Off</Button>
                            </Carousel.Caption>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;
