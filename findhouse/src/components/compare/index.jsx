import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import LookingItem from "../home-6/LookingItem";
import FeaturesPlans from "./FeaturesPlans";
// import BreadCrumbBanner from "./BreadCrumbBanner";
// import GalleryBox from "./GalleryBox";


// reacticons
import { FaHome, FaLayerGroup,FaWindowMaximize,FaToilet } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { MdKitchen } from 'react-icons/md';
import { RiDoorOpenLine } from 'react-icons/ri';
import { BsBuilding } from 'react-icons/bs';
import { GiWaterfall } from 'react-icons/gi';
import { RiBuildingLine } from 'react-icons/ri';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { MdTrain } from 'react-icons/md';
import { FaPlane } from 'react-icons/fa';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { FaWater, FaCity } from 'react-icons/fa';


const index = () => {

  const proximity = [
    {
      id: 1,
      title: "Sawantwadi Lake",
      icon: <FaWater />,
      text: `1 Kilometer`,
    },
    {
      id: 2,
      title: "Sawantwadi Market",
      icon: <HiOutlineShoppingBag />,
      text: `1.3 Kilometer`,
    },
    {
      id: 3,
      title: "Sawantwadi rajwada",
      icon: <FaHome />,
      text: `1.3 Kilometer`,
    },
    {
      id: 4,
      title: "Sawantwadi Railway Stn",
      icon: <MdTrain />,
      text: `7 Kilometer`,
    },
    {
      id: 5,
      title: "Goa",
      icon: <FaUmbrellaBeach />,
      text: `16 Kilometer`,
    },
    {
      id: 6,
      title: "Kudal City",
      icon: <FaCity />,
      text: `22 Kilometer`,
    },
    {
      id: 7,
      title: "Amboli Waterfall",
      icon: <GiWaterfall />,
      text: `30 Kilometer`,
    },
    {
      id: 8,
      title: "Vengurla Beach",
      icon: <FaUmbrellaBeach />,
      text: `32 Kilometer`,
    },
    {
      id: 9,
      title: "Mopa Airport",
      icon: <FaPlane />,
      text: `34 Kilometer`,
    },
    {
      id: 10,
      title: "Chipi Airport",
      icon: <FaPlane />,
      text: `40 Kilometer`,
    },
    {
      id: 11,
      title: "Malvan",
      icon: <FaCity />,
      text: `50 Kilometer`,
    },
    {
      id: 12,
      title: "Mangeli Waterfall",
      icon: <GiWaterfall />,
      text: `59 Kilometer`,
    },
  ];
  
  const internal=[
    {
      id: 1,
      title: "Structure",
      icon: <FaHome />,
      text: `Earthquake resistant R.C.C Framed Structure.`,
    },
    {
      id: 2,
      title: "Doors",
      icon: <RiDoorOpenLine />,
      text: `Wooden door Frame. Hot-pressed solid core flush door with laminate finish and good quality hardware fittings.`,
    },
    {
      id: 3,
      title: "Wall & Ceiling",
      icon: <FaLayerGroup />,
      text: `Internal wall with gypsum finish with Emulsion/luster/plastic paint. External walls sand-faced plaster with Ultima HD paint.`,
    },
    {
      id: 4,
      title: "Flooring",
      icon: <FaLayerGroup /> ,
      text: `Vitrified tiles in living, dining, kitchen, bedrooms and corridors.`,
    },
    {
      id: 5,
      title: "Windows",
      icon: <FaWindowMaximize />,
      text: `Powder coated aluminum sliding windows with good quality aluminum section. Granite/Marble window sills.`,
    },
    {
      id: 6,
      title: "Electrification",
      icon: <HiOutlineLightBulb />,
      text: `Concealed electric wiring with high quality modular switches.`,
    },
    {
      id: 7,
      title: "Kitchen",
      icon: <MdKitchen />,
      text: `Granite platform with stainless steel sink. Tiles on walls up to door height.`,
    },
    {
      id: 8,
      title: "Toilets",
      icon: <FaToilet />,
      text: `Full height designer tiles on walls. Anti-skid ceramic floor tiles in all toilets.
      Branded sanitary ware and CP fittings.
      Hot & cold water mixer shower panel in all toilet.
      `,
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
            <LookingItem find={internal} />
          </div>
        </div>
      </section>

      <section className="about-section pb30">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "2rem" }}>
            <h1>Proximity Areas from peaceful residencial locations</h1>
          </div>
          <div className="row">
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
