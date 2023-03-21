import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import MobileMenu from "../common/header/MobileMenu";
import Partners from "../common/Partners";
import Blogs from "../common/Blogs";
import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import Header from "./Header";
import Hero from "./Hero";
import WhyChoose from "../common/WhyChoose";
import PopupSignInUp from "../common/PopupSignInUp";
import LookingItem from "../home-6/LookingItem";

const Index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Home Design --> */}
      <Hero />

      {/* <!-- Feature Properties --> */}
      <section id="feature-property" className="feature-property bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb40">
                <h2 style={{color:"black", marginBottom:"20px"}}>PRESERVING PRIZED CLASS</h2>
                <p style={{color:"gray", textAlign:"center"}}>Just like old classic heritage needs to be preserved to have a look at where we come from, Heritage Homes gives a unique opportunity to bring together modern advanced technology and the priceless richness of heritage. It's a place for keeping in touch with the past while moving on to a bright future, taking steps along with the fast-paced new-age world.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/*  */}

      {/* <!-- Why Chose Us --> */}
      {/* <section id="why-chose" className="whychose_us bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Why Choose Us</h2>
                <p>We provide full service at every step.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <WhyChoose />
          </div>
        </div>
      </section> */}

      <section id="property-city" className="property-city pb30">
        <div className="container">
          

        <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Typical Floor Plan</h2>
                <p>Enjoy the enticing beauty of classic structures that complement magnificent advanced designs. A residential complex that provides top-class lifestyle.</p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <FindProperties />
          </div>
          {/* End .row */}
          <div className="row"  style={{marginTop:"2rem"}}>
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Internal Amenities</h2>
              </div>
            </div>
          </div>
        <div className="row features_row"  style={{marginTop:"0.2rem"}}>
            <LookingItem />
          </div>
        </div>
      </section>
     

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default Index;
