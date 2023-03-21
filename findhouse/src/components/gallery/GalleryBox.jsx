import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const GalleryBox = () => {
  const galleryContent = [
    {
      id: 1,
      img: "/assets/images/property/fp1.jpg",
      wing: "A",
      sqft: "600",
      bhk: 2,
      flatNo: 1,
    },
    {
      id: 2,
      img: "/assets/images/property/fp2.jpg",
      wing: "A",
      sqft: "600",
      bhk: 2,
      flatNo: 1,
    },
    {
      id: 3,
      img: "/assets/images/property/fp3.jpg",
      wing: "A",
      sqft: "600",
      bhk: 2,
      flatNo: 1,
    },
    {
      id: 4,
      img: "/assets/images/property/fp4.jpg",
      wing: "A",
      sqft: "600",
      bhk: 2,
      flatNo: 1,
    },
    {
      id: 5,
      img: "/assets/images/property/fp5.jpg",
      wing: "A",
      sqft: "600",
      bhk: 2,
      flatNo: 1,
    },
    {
      id: 6,
      img: "/assets/images/property/fp6.jpg",
      wing: "A",
      sqft: "600",
      bhk: 2,
      flatNo: 1,
    },
  ];

  return (
    <>
      <div className="row">
        {galleryContent.map((singleItem) => (
          <div className="col-md-6 col-lg-12 mb-4" key={singleItem.id}>
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6">
                  <img
                    src={singleItem.img}
                    className="img-fluid"
                    alt="fp1.jpg"
                  />
                </div>
                <div className="col-md-6" style={{
                      padding: "20px",
                      backgroundColor: "#f7f7f7",
                    }}>
                  <div
                    className="card-body"
                    style={{
                      padding: "20px",
                      backgroundColor: "#f7f7f7",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{
                        fontSize: "24px",
                        marginBottom: "20px",
                      }}
                    >
                      Wing: {singleItem.wing}
                    </h5>
                    <p
                      className="card-text mb-2"
                      style={{
                        fontSize: "18px",
                        marginBottom: "10px",
                      }}
                    >
                      <span>Sqft:</span> {singleItem.sqft}
                    </p>
                    <p
                      className="card-text mb-2"
                      style={{
                        fontSize: "18px",
                        marginBottom: "10px",
                      }}
                    >
                      <span>BHK:</span> {singleItem.bhk}
                    </p>
                    <p
                      className="card-text mb-2"
                      style={{
                        fontSize: "18px",
                        marginBottom: "10px",
                      }}
                    >
                      <span>Flat No:</span> {singleItem.flatNo}
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "#1e2a4a",
                        borderColor: " #1e2a4a",
                        padding: "10px 20px",
                        fontSize: "18px",
                        marginTop: "20px",
                      }}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryBox;
