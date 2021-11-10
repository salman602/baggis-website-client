import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { key, name, price, description, img } = product;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>key: {key}</p>
                    <Card.Text>
                        {description.slice(0, 200)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <h4>Price: ${price}</h4>
                    <Link to={`/product/${key}`}>
                        <Button>Buy Now</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Product;