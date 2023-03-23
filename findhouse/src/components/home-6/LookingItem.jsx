// import find from "../../data/find";

const LookingItem = ({find}) => {
  return (
    <>
      {find.map((item) => (
        <div className="col-sm-6 col-lg-3 col-xl-3 p0" key={item.id}>
          <div className="why_chose_us home6">
            <div className="icon">
              <span className={item.icon}>{item.icon}</span>
            </div>
            <div className="details">
              <h4 style={{color:"black", fontFamily: 'Montserrat'}}>{item.title}</h4>
              <p style={{color:"gray", textAlign:"center", fontFamily: 'Montserrat', fontSize:"1rem"}}>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LookingItem;
