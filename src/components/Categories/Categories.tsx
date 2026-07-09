import "./Categories.css";
import { Link } from "react-router-dom"; // 1. దీన్ని తప్పనిసరిగా ఇంపోర్ట్ చేయండి

// మీ ఇంపోర్ట్స్ అలాగే ఉంచండి...
import tenderImg from "../../assets/images/tender.png";
import semiImg from "../../assets/images/semi.png";
import oilImg from "../../assets/images/oil.png";
import copraImg from "../../assets/images/copra.png";
import bananaImg from "../../assets/images/banana.png";
import lemonImg from "../../assets/images/lemon.png";
import gingerImg from "../../assets/images/ginger.png";
import mirchiImg from "../../assets/images/mirchi.png";
import kajuImg from "../../assets/images/kaju.png";

const categories = [
  { id: 1, title: "Tender Coconut", image: tenderImg },
  { id: 2, title: "Semi Husked", image: semiImg },
  { id: 3, title: "Coconut Oil", image: oilImg },
  { id: 4, title: "Copra", image: copraImg },
  { id: 5, title: "Banana", image: bananaImg },
  { id: 6, title: "Lemon", image: lemonImg },
  { id: 7, title: "Ginger", image: gingerImg },
  { id: 8, title: "Green Chilli", image: mirchiImg },
  { id: 9, title: "Cashew (Kaju)", image: kajuImg },
];

function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <span>OUR CATEGORIES</span>
          <h2>Shop By Categories</h2>
        </div>
        
        <div className="categories-grid">
          {categories.map((item) => (
            // 2. ఇక్కడ <div> బదులు <Link> వాడండి, ఇది క్లిక్ చేసినప్పుడు పేజీకి తీసుకెళ్తుంది
            <Link to={`/product/${item.id}`} className="category-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;