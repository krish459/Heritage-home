import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import FeaturesPlans from "../compare/FeaturesPlans";
import BreadCrumbBanner from "./BreadCrumbBanner";
import GalleryBox from "./GalleryBox";


const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Inner Page Breadcrumb --> */}
      {/* <BreadCrumbBanner />
       */}

        <div className="row" style={{marginTop:"5rem"}}>
          <div className="col-xl-6">
            <div className="breadcrumb_content">
              {/* <BreadCrumb title="gallery" /> */}
              {/* <h4 className="breadcrumb_title">Property plans</h4> */}
            </div>
          </div>
          {/* End .col */}
        </div>
      

      {/* <!-- About Text Content --> */}
      <section className="about-section pb30">
        <div className="container">
          <div className="text-center" style={{marginBottom:"2rem"}}>
            <h1>features</h1>
          </div>
          <div className="row">
            {/* <GalleryBox /> */}
            <FeaturesPlans/>
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

export default index;
