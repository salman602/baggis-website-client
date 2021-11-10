import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Purchase = () => {
    // load data using custom hook
    const [products] = useProducts();
    const { productId } = useParams();
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        const filteredProduct = products.filter(product => product?.key === Number(productId));
        setSingleProduct(filteredProduct[0]);
    }, [products, productId]);

    const singleProductStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };


    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={4} style={singleProductStyle}>
                        <img className="mw-100" src={singleProduct?.img} alt="" />
                    </Col>
                    <Col xs={12} sm={6} md={4} style={singleProductStyle}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{singleProduct?.name}</Card.Title>
                                <Card.Text>
                                    {singleProduct?.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                        xs=6 md=4
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Purchase;