import React from 'react';
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import aboutBannerImg from '../../assets/about-banner.png';

const aboutBanner = {
    backgroundImage: `url(${aboutBannerImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '500px'
}

const About = () => {
    return (
        <div>
            <Navigation />
            <Container className="my-5">
                <div style={aboutBanner} className="px-3 d-flex align-items-center" >
                    <Row>

                        <Col>
                            <h2 className="custom-color text-start my-2">KNOW IT ALL FIRST ABOUT US!</h2>
                            <p className="text-start text-white">Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
                            <Col>
                                <Form.Control placeholder="Your Email Address" />
                            </Col>
                            <Col className="text-start">
                                <Button className="button my-2">SUBSCRIBE</Button>
                            </Col>
                        </Col>
                    </Row>
                </div>

                <h1 className="custom-color text-start my-2">About Us</h1>

                <h4 className="text-danger text-start my-2">OUR STORY</h4>
                <p className="text-start">From European mainland, Berliner Bags story dates back to the year 2014 when its founder Kees completed his Business studies at the University of Amsterdam, Netherlands. While still a student, Kees noticed a gap in the market and realized how difficult it was to find a durable yet affordable & fashionable vintage bag for work and leisure. This motivated Kees and gave him an idea to launch a fashion startup specializing in leather bags.With a strong affinity for design and creativity, Kees deepened his skills attending design courses in Italy and learning about various designs from ex-Gucci employees. He nurtured Berliner bags from just an idea into a fully-fledged concept that has continued to blossom under his stewardship. He serves as the chief design officer for the brand.Innovative, shrewd, and progressive, Berliner Bags presented the company’s first modern black leather collection in the early months of 2019. We aim to craft pieces that are modern yet timeless. And thanks to the artisanal nature of our processes and the full-grain and vegetable-tanned leather we exclusively use, Berliner Bags merchandise will certainly stand the test of time.</p>

                <h4 className="text-danger text-start my-2">OUR PHILOSOPHY</h4>
                <p className="text-start">Provide our customers with a distinctive line of high quality, durable and fashionable leather bags at a fair price.To become a market leading and Berlin associated fashion brand.We strongly believe that treating everyone fairly will ultimately culminate in high-quality leather bags for our customers.</p>

                <h4 className="text-danger text-start my-2">OUR PROMISES</h4>
                <p className="text-start">We guarantee every Leather bag against material and workmanship defect for 1 year. And if your purchase does not live up to your expectation, you are entitled to a 100-day return policy after receiving your bag.Each bag is manufactured for you with love and enthusiasm. Our teams of highly meticulous and experienced artisans hand-forge each piece using the best methods they know focusing on the smallest detail such that you can feel their skill in every bag.Hand-fashioned by qualified and profoundly talented craftsmen, all of our bags are designed locally in Berlin and are inspired by this great city. Most of our images are additionally made in Berlin by youthful and skilled photographers.</p>


            </Container>
            <Footer />
        </div>
    );
};

export default About;