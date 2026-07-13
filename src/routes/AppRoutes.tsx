import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";

// 👇 Import ChatBot
import ChatBot from "../components/chatbot/ChatBot";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      {/* 👇 AI ChatBot - అన్ని pages లో కనిపిస్తుంది */}
      <ChatBot />
    </BrowserRouter>
  );
}

export default AppRoutes;