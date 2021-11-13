import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();
    return (
        <div>
            <Container>
                <Row xs={1} sm={2} md={3} className="g-4">
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product.key}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;