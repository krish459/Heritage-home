// import find from "../../data/find";

import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
const FeaturesPlans = ({ find }) => {
  return (
    <>
      {find.map((item) => {
        const [ref, inView] = useInView({
          threshold: 0.3,
          triggerOnce: false,
        });

        const props = useSpring({
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(-50px)",
        });
        return (
          <animated.div ref={ref} className="col-sm-6 col-lg-3 col-xl-4 p0" key={item.id} style={props}>
            <div className="why_chose_us home6">
              <div
                className="item-container"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  className="icon"
                  style={{
                    flex: "0 0 auto",
                    marginRight: "10px",
                  }}
                >
                  <span
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    {item.icon}
                  </span>
                </div>
                <div
                  className="details"
                  style={{
                    flex: "1 1 auto",
                  }}
                >
                  <h4 style={{ color: "black", fontFamily: "Montserrat" }}>
                    {item.title}
                  </h4>
                  {item.text && (
                    <p
                      style={{
                        color: "gray",
                        textAlign: "center",
                        fontFamily: "Montserrat",
                      }}
                    >
                      {item.text}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </animated.div>
        );
      })}
    </>
  );
};

export default FeaturesPlans;
