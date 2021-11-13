import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();
    return (
        <div>
            <Container className="py-5">
                <h2 className="my-4">New <span className="custom-color">Arrival</span></h2>
                <Row xs={1} sm={2} md={3} className="g-4">
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;