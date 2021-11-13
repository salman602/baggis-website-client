import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from '../../Home/Product/Product';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Explore = () => {
    const [products] = useProducts();
    return (
        <div>
            <Navigation />
            <Container>
                <Row xs={1} sm={2} md={3} className="g-4">
                    {
                        products.map(product => <Product
                            key={product.key}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Explore;