import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useProducts from '../../hooks/useProducts';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const { user } = useAuth();
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

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(order => {
                if (order.insertedId) {
                    alert('Your order processed successfully');
                    reset();
                }
            })

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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name")} defaultValue={user?.displayName} readOnly />
                            <input {...register("email")} defaultValue={user?.email} readOnly />
                            <input {...register("address")} placeholder="Your address" />
                            <input {...register("phone")} placeholder="Phone Number" />
                            {singleProduct?.name && <input {...register("productName")} defaultValue={singleProduct?.name} readOnly />}
                            {singleProduct?.price && <input {...register("unitprice")} defaultValue={singleProduct?.price} readOnly />}
                            <input type="number" {...register("quantity", { min: 1, max: 99 })} defaultValue='1' placeholder="Quantity" />
                            <input type="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Purchase;