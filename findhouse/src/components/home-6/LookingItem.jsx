// import find from "../../data/find";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const LookingItem = ({ find }) => {
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
          <animated.div
            ref={ref}
            className="col-sm-6 col-md-6 col-lg-3 col-xl-3 p2 "
            key={item.id}
            style={props}
          >
            <div className="why_chose_us home6">
              <div className="icon">
                <span className={item.icon}>{item.icon}</span>
              </div>
              <div className="details">
                <h4 style={{ color: "black", fontFamily: "Montserrat" }}>
                  {item.title}
                </h4>
                <p
                  style={{
                    color: "gray",
                    textAlign: "center",
                    fontFamily: "Montserrat",
                    fontSize: "1rem",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          </animated.div>
        );
      })}
    </>
  );
};

export default LookingItem;
