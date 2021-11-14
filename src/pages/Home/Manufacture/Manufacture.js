import React from 'react';
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import manufacturer from '../../../assets/team3.jpg';


const Manufacture = () => {
    return (
        <div>
            <Container className="py-5">
                <Row>
                    <Col xs={12} md={7}>
                        <img className="mw-100" src={manufacturer} alt="" />
                    </Col>
                    <Col xs={12} md={5} className="d-flex justify-content-center align-items-center">
                        <Card className="p-3 border-0">
                            <h4 className="custom-color">Manufacture</h4>
                            <h1>Story of Manufacture</h1>
                            <p className="text-start">Some people would say “why leather, there are many other materials”. But we think otherwise! Leather is a perfect material for your new bag or backpack! We’ll explain why! Leather is what we do. We are a leather company and all our products are made of leather, which is a natural material that is soft, supple and flexible. Additionally, for interior lining, we also use a perfectly natural material – cotton – empowering our products to stand the test of time and remain friendly to the environment at all times. Leather is bestowed with special qualities that make it stand apart from a large number of fabrics and synthetic materials. It is a more sustainable and durable material that can be used for decades with proper maintenance.</p>
                            <Button className="button w-25 mx-auto">READ MORE</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Manufacture;