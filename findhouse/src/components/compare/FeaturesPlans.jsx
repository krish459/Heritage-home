// import find from "../../data/find";

const FeaturesPlans = ({ find }) => {
  return (
    <>
      {find.map((item) => (
        <div className="col-sm-6 col-lg-3 col-xl-4 p0" key={item.id}>
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
                <span  style={{alignItems:"center", justifyContent:"center"}}>{item.icon}</span>
              </div>
              <div
                className="details"
                style={{
                  flex: "1 1 auto",
                }}
              >
                <h4 style={{color:"black", fontFamily: 'Montserrat'}}>{item.title}</h4>
                {item.text && <p style={{color:"gray", textAlign:"center", fontFamily: 'Montserrat'}}>{item.text}</p>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturesPlans;
