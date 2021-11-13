import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Rating from 'react-rating';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://pacific-coast-57410.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="py-sm-3 py-md-4 py-lg-5">
            <h2 className="mb-4">Our customer's <span className="custom-color">Feedback</span></h2>
            <Container>
                <Row xs={2} sm={3} md={4} className="g-4">
                    {
                        reviews.map(review => (
                            <Col
                                key={review._id}
                            >
                                <Card className="h-100 border-0 shadow">
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