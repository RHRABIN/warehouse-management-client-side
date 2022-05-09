import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider/slider1.jpg'
import slider2 from '../../images/slider/slider2.jpg'
import slider3 from '../../images/slider/slider3.jpg'
const Slider = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Our stock Furniture Item</h2>
                        <p>This product is made by china.From now we delevered from Bangladesh</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        < h2>Our stock Furniture Item</h2>
                        <p>This product is made by china.From now we delevered from Bangladesh</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>Our stock Furniture Item</h2>
                        <p>This product is made by china.From now we delevered from Bangladesh</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;