import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Rating from 'react-rating';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="py-sm-3 py-md-4 py-lg-5">
            <Container>
                <Row xs={2} sm={3} md={4} className="g-4">
                    {
                        reviews.map(review => (
                            <Col
                                key={review._id}
                            >
                                <Card className="h-100">
                                    <Card.Body>
                                        <Card.Title>{review?.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{review?.email}</Card.Subtitle>
                                        <Card.Text>{review?.review}</Card.Text>
                                        <Rating
                                            initialRating={review?.rating}
                                            fullSymbol="fas fa-star"
                                            emptySymbol="far fa-star"
                                            readonly
                                            style={{ color: 'orange', letterSpacing: '0.3rem' }}
                                        />
                                        <Card.Text>{review?.rating}</Card.Text>
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

export default Reviews;