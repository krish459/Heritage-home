import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-5 pr0 pl0">
        <div className="footer_about_widget">
          <h4>Heritage Homes</h4>
          <p style={{ color: "white" }}>
            Heritage Homes blends modern technology with priceless heritage to
            preserve the past while moving towards a brighter future.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-4">
        <div className="footer_contact_widget">
          <h6 style={{color:"white"}}>A PROJECT BY</h6>
          <div className="footerImage"
          ></div>
          <ul className="list-unstyled" >
            <li>
              <span style={{ color: "white" }}>
                111/B, Mandpeshwar Industrial Estate,
              </span>
            </li>
            <li>
              <span style={{ color: "white" }}>Opp. Prem Nagar,</span>
            </li>
            <li>
              <span style={{ color: "white" }}>
                Off. S. V. Road, Borivali (West)
              </span>
            </li>
            <li>
              <span style={{ color: "white" }}>Mumbai, 400 092</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li>
              <a
                href="mailto:heritagerealtors9@gmail.com"
                style={{ color: "white" }}
              >
                heritagerealtors9@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+918169110810" style={{ color: "white" }}>
                +91-8169110810
              </a>
            </li>
            <li>
              <a href="tel:+918976708781" style={{ color: "white" }}>
                +91-8976708781
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

    </> 
  );
};

export default Footer;

