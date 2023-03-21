import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import LookingItem from "../home-6/LookingItem";
import FeaturesPlans from "./FeaturesPlans";
// import BreadCrumbBanner from "./BreadCrumbBanner";
// import GalleryBox from "./GalleryBox";

const index = () => {

  const proximity=[
    {
      id: 1,
      title: "Sawantwadi Lake",
      icon: "flaticon-house",
      text: `1 Kilometer`,
    },
    {
      id: 2,
      title: "Sawantwadi Market",
      icon: "flaticon-house-1",
      text: `1.3 Kilometer`,
    },
    {
      id: 3,
      title: "Town House",
      icon: "flaticon-house-2",
      text: `Aliquam dictum elit vitae mauris facilisis, at dictum urna.`,
    },
    {
      id: 4,
      title: "Apartment",
      icon: "flaticon-building",
      text: `Aliquam dictum elit vitae mauris facilisis, at dictum urna.`,
    },
    {
      id: 1,
      title: "Modern Villa",
      icon: "flaticon-house",
      text: `Aliquam dictum elit vitae mauris facilisis, at dictum urna.`,
    },
    {
      id: 2,
      title: "Family House",
      icon: "flaticon-house-1",
      text: `Aliquam dictum elit vitae mauris facilisis, at dictum urna.`,
    },
    {
      id: 3,
      title: "Town House",
      icon: "flaticon-house-2",
      text: `Aliquam dictum elit vitae mauris facilisis, at dictum urna.`,
    },
    {
      id: 4,
      title: "Apartment",
      icon: "flaticon-building",
      text: `Aliquam dictum elit vitae mauris facilisis, at dictum urna.`,
    },
    {
      id: 4,
      title: "Apartment",
      icon: "flaticon-building",
      text: `Aliquam dictum elit vitae mauris facilisis, at dictum urna.`,
    },
  ]
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

      <div className="row" style={{ marginTop: "5rem" }}>
        <div className="col-xl-6">
          <div className="breadcrumb_content">
            {/* <BreadCrumb title="gallery" /> */}
            {/* <h4 className="breadcrumb_title">Property plans</h4> */}
          </div>
        </div>
        {/* End .col */}
      </div>

      {/* <!-- About Text Content --> */}
      

      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row" style={{ marginTop: "2rem" }}>
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Internal Amenities</h2>
              </div>
            </div>
          </div>
          <div className="row features_row" style={{ marginTop: "0.2rem" }}>
            <LookingItem />
          </div>
        </div>
      </section>

      <section className="about-section pb30">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "2rem" }}>
            <h1>Proximity Areas from peaceful residencial locations</h1>
          </div>
          <div className="row">
            {/* <GalleryBox /> */}
            <FeaturesPlans find={proximity}/>
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
