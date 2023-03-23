import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <div
        className="scrollToHome"
        style={{
          marginBottom: "5rem",
          backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href="https://api.whatsapp.com/send?phone=8169110810" target="_blank" style={{color:"white"}}>
          <FaWhatsapp size={40} />
        </a>
      </div>
      {isVisible && (
        <>
          <div className="scrollToHome" onClick={scrollToTop}>
            <i className="flaticon-arrows"></i>
          </div>
        </>
      )}
    </>
  );
}
