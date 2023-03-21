import Link from "next/link";
import findProperties from "../../data/findProperties";

const FindProperties = () => {
  return (
    <>
      {/* {findProperties.slice(0, 1).map((item) => ( */}
        <div className={`col-lg-9 mx-auto`}>
          {/* <Link href="/listing-grid-v1"> */}
            <a className="properti_city d-block">
              <div className="thumb">
                <img className="img-fluid w100" src="https://s3-us-west-2.amazonaws.com/hfc-ad-prod/plan_assets/89213/original/89213AH_f1.jpg?1446589058" alt="pc1.jpg" />
              </div>
              {/* <div className="overlay">
                <div className="details">
                  <h4>{item.name}</h4>
                  <p>{item.number} Properties</p>
                </div>
              </div> */}
            </a>
          {/* </Link> */}
        </div>
      {/* ))} */}
    </>
  );
};

export default FindProperties;
