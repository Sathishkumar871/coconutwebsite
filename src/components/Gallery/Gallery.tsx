import { useState } from "react";
import "./Gallery.css";

const allImages = [
  "/images/gallery/gallery1.jpg", "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg", "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg", "/images/gallery/gallery6.jpg",
  "/images/gallery/gallery7.jpg", "/images/gallery/gallery8.jpg",
  "/images/gallery/gallery9.jpg", "/images/gallery/gallery10.jpg",
  "/images/gallery/gallery11.jpg", "/images/gallery/gallery12.jpg",
   "/images/gallery/gallery13.jpg", "/images/gallery/gallery14.jpg",
    "/images/gallery/gallery15.jpg", "/images/gallery/gallery16.jpg",
     "/images/gallery/gallery17.jpg", "/images/gallery/gallery18.jpg",
      "/images/gallery/gallery19.jpg", "/images/gallery/gallery20.jpg",
       "/images/gallery/gallery21.jpg", "/images/gallery/gallery22.jpg",
        "/images/gallery/gallery23.jpg", "/images/gallery/gallery24.jpg",
         "/images/gallery/gallery25.jpg", "/images/gallery/gallery26.jpg",
          "/images/gallery/gallery27.jpg", "/images/gallery/gallery28.jpg",
           "/images/gallery/gallery29.jpg", "/images/gallery/gallery30.jpg",
];

function Gallery() {
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <section className="gallery">
      <div className="container">
        <div className="section-title">
          <span>OUR GALLERY</span>
          <h2>Our Farm Fresh</h2>
        </div>

        {/* ఇక్కడ క్లిక్ ఆప్షన్స్ ఏవీ లేవు, కేవలం ఫోటోలు మాత్రమే */}
        <div className="gallery-grid">
          {allImages.slice(0, visibleCount).map((image, index) => (
            <div className="gallery-card" key={index}>
              <img src={image} alt="Farm" />
            </div>
          ))}
        </div>

        {/* View More బటన్ */}
        {visibleCount < allImages.length && (
          <button className="view-more-btn" onClick={() => setVisibleCount(allImages.length)}>
            View More
          </button>
        )}
      </div>
    </section>
  );
}

export default Gallery;