import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const trashBox = <FontAwesomeIcon icon={faTrashAlt} />;

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pacific-coast-57410.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('Are you sure , You want to Delete product?');
        if (proceed) {
            const url = `https://pacific-coast-57410.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product is deleted successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                })
        }
    };

    return (
        <div>
            <h2>Manage your products</h2>
            <Container>
                <Row xs={2} md={4} className="g-4">

                    {
                        products.map(singleProduct => (
                            <Col key={singleProduct?._id}>
                                <Card>
                                    <Card.Img variant="top" src={singleProduct?.img} />
                                    <Card.Body>
                                        <Card.Title>{singleProduct?.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Price: ${singleProduct?.price}</Card.Subtitle>
                                        <Button onClick={() => handleDeleteProduct(singleProduct?._id)} size="sm" variant="warning">Delete product {trashBox}</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </div>
    );
};

export default ManageProducts;