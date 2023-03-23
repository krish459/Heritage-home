import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const GalleryBox = () => {
  const galleryContent = [
    {
      id: 1,
      img: "/assets/images/heri_Image/layout.jpg",
      wing: "C",
      sqft: "450",
      bhk: 1,
      flatNo: 2,
    },
    {
      id: 2,
      img: "/assets/images/heri_Image/layout2.jpg",
      wing: "C",
      sqft: "557",
      bhk: 2,
      flatNo: 1,
    },
    {
      id: 3,
      img: "/assets/images/heri_Image/layout.jpg",
      wing: "D",
      sqft: "481",
      bhk: 1,
      flatNo: 1,
    },
    {
      id: 4,
      img: "/assets/images/heri_Image/layout2.jpg",
      wing: "D",
      sqft: "405",
      bhk: 1,
      flatNo: 2,
    },
    {
      id: 5,
      img: "/assets/images/heri_Image/layout.jpg",
      wing: "E",
      sqft: "376",
      bhk: 1,
      flatNo: 3,
    },
    {
      id: 6,
      img: "/assets/images/heri_Image/layout2.jpg",
      wing: "E",
      sqft: "532",
      bhk: 2,
      flatNo: 2,
    },
  ];

  return (
    <>
      {/* <div className="row">
        {galleryContent.map((singleItem) => (
          <div className="col-md-6 col-lg-11 mb-4" key={singleItem.id}>
            <div className="card" style={{
                      backgroundColor: "#f7f7f7",
                    }}>
              <div className="row g-0" >
                <div className="col-md-5">
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
      </div> */}
      <div className="row row-cols-1 row-cols-md-2 g-4">
  {galleryContent.map((singleItem) => (
    <div className="col" key={singleItem.id}>
      <div className="card h-100">
        <img
          src={singleItem.img}
          className="card-img-top"
          alt="fp1.jpg"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">Wing: {singleItem.wing}</h5>
          <p className="card-text">
            <span>Sqft:</span> {singleItem.sqft}
          </p>
          <p className="card-text">
            <span>BHK:</span> {singleItem.bhk}
          </p>
          <p className="card-text">
            <span>Flat No:</span> {singleItem.flatNo}
          </p>
        </div>
        <div className="card-footer">
          <a
            href="#"
            className="btn btn-primary"
            style={{
              backgroundColor: "#1e2a4a",
              borderColor: " #1e2a4a",
              padding: "10px 20px",
              fontSize: "18px",
              margin:"auto"
            }}
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

    </>
  );
};

export default GalleryBox;
