import { useParams } from "react-router-dom";
import { productData } from "../data/productData";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id || "1"));

  // ప్రొడక్ట్ డేటా లేకపోతే
  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="product-details-page">
      <h1>{product.title}</h1>
      <p>{product.description}</p>

      {/* వెరైటీలు ఉన్నాయా లేదా అని చెక్ చేస్తోంది */}
      <div className="grades-grid">
        {product.varieties && product.varieties.length > 0 ? (
          product.varieties.map((v, index) => (
            <div key={index} className="grade-card">
              <img src={v.image} alt={v.grade} className="grade-image" />
              <h3>{v.grade}</h3>
              <p className="price">{v.price}</p>
              <p>{v.description}</p>
              
              {/* కేవలం ఒకే ఒక Order Now బటన్ - క్లిక్ చేస్తే డైరెక్ట్ కాల్ వెళ్తుంది */}
              <a href="tel:9553679915" className="btn-order-link" style={{ textDecoration: 'none', display: 'block', marginTop: '10px' }}>
                <button className="btn-enquire" style={{ width: '100%', cursor: 'pointer' }}>
                  Order Now
                </button>
              </a>
            </div>
          ))
        ) : (
          <p>No varieties available for this product.</p>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;