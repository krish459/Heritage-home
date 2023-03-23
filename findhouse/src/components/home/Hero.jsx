import HeroFilter from "./HeroFilter";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  return (
    <section className="home-one home1-overlay">
      <Carousel>
        <Carousel.Item>
          <div className=" home1_bgi1">
            <div className="container">
              <div className="row posr">
                <div className="col-lg-12">
                  <HeroFilter />
                </div>
              </div>
            </div>

            {/* End .container */}
            <div className="mouse_scroll">
              <a href="#feature-property">
                <div className="icon">
                  <h4>Scroll Down</h4>
                  <p>to discover more</p>
                </div>
                <div className="thumb">
                  <img src="assets/images/resource/mouse.png" alt="mouse.png" />
                </div>
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="home1_bgi2">
            <div className="container">
              <div className="row posr">
                <div className="col-lg-12">
                  <HeroFilter />
                </div>
              </div>
            </div>

            {/* End .container */}
            <div className="mouse_scroll">
              <a href="#feature-property">
                <div className="icon">
                  <h4>Scroll Down</h4>
                  <p>to discover more</p>
                </div>
                <div className="thumb">
                  <img src="assets/images/resource/mouse.png" alt="mouse.png" />
                </div>
              </a>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className=" home1_bgi3">
            <div className="container">
              <div className="row posr">
                <div className="col-lg-12">
                  <HeroFilter />
                </div>
              </div>
            </div>

            {/* End .container */}
            <div className="mouse_scroll">
              <a href="#feature-property">
                <div className="icon">
                  <h4>Scroll Down</h4>
                  <p>to discover more</p>
                </div>
                <div className="thumb">
                  <img src="assets/images/resource/mouse.png" alt="mouse.png" />
                </div>
              </a>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Hero;
