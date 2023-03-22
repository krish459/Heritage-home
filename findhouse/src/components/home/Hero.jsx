import HeroFilter from "./HeroFilter";

const Hero = () => {
  return (
    <section className="home-one home1-overlay home1_bgi1" style={{backgroundImage: `url("https://tse4.mm.bing.net/th?id=OIP.AuLT-tpeirpmk4mxKptZzgHaE9&pid=Api&P=0")`}}>
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
    </section>
  );
};

export default Hero;
