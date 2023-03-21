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
      title: "Sawantwadi rajwada",
      icon: "flaticon-house-2",
      text: `1.3 Kilometer`,
    },
    {
      id: 4,
      title: "Sawantwadi Railway Stn",
      icon: "flaticon-building",
      text: `7 Kilometer`,
    },
    {
      id: 5,
      title: "Goa",
      icon: "flaticon-house",
      text: `16 Kilometer`,
    },
    {
      id: 6,
      title: "Kudal City",
      icon: "flaticon-house-1",
      text: `22 Kilometer`,
    },
    {
      id: 7,
      title: "Amboli Waterfall",
      icon: "flaticon-house-2",
      text: `30 Kilometer`,
    },
    {
      id: 8,
      title: "Vengurla Beach",
      icon: "flaticon-building",
      text: `32 Kilometer`,
    },
    {
      id: 9,
      title: "Mopa Airport",
      icon: "flaticon-building",
      text: `34 Kilometer`,
    },
    {
      id: 10,
      title: "Chipi Airport",
      icon: "flaticon-building",
      text: `40 Kilometer`,
    },
    {
      id: 11,
      title: "Malvan",
      icon: "flaticon-building",
      text: `50 Kilometer`,
    },
    {
      id: 12,
      title: "Mangeli Waterfall",
      icon: "flaticon-building",
      text: `59 Kilometer`,
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
