import Carousel from 'react-bootstrap/Carousel'
import slider1 from 'assets/slider1.jpeg'
import slider2 from 'assets/slider2.jpeg'
import slider3 from 'assets/slider3.jpeg'

type Props = {}
const HeroSlider = (props: Props) => {
    return (
        <>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Healthy food</h3>
                        <h6>Our health is what we eat.</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Balanced food</h3>
                        <h6>
                            Our food is balanced and includes proteins,
                            carbohydrates in every plate.
                        </h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Fresh vegetables</h3>
                        <h6>We use only fresh vegetables.</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default HeroSlider
