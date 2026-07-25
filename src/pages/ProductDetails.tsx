import { useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../data/productData";
import OrderModal from "../components/order/OrderModal";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = productData.find(
    (item) => item.id === parseInt(id || "1")
  );

  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState("");

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <>
      <div className="product-details-page">
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <div className="grades-grid">
          {product.varieties && product.varieties.length > 0 ? (
            product.varieties.map((v, index) => (
              <div key={index} className="grade-card">
                <img
                  src={v.image}
                  alt={v.grade}
                  className="grade-image"
                />

                <h3>{v.grade}</h3>

                <p className="price">{v.price}</p>

                <p>{v.description}</p>

                <button
                  className="btn-enquire"
                  style={{
                    width: "100%",
                    marginTop: "12px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSelectedGrade(v.grade);
                    setIsOrderOpen(true);
                  }}
                >
                  Order Now
                </button>
              </div>
            ))
          ) : (
            <p>No varieties available for this product.</p>
          )}
        </div>
      </div>

      <OrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        productName={product.title}
        grade={selectedGrade}
      />
    </>
  );
}

export default ProductDetails;