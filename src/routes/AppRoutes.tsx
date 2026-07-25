import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
// Owner Pages
import OwnerLogin from "../pages/OwnerLogin";
import OwnerDashboard from "../pages/OwnerDashboard";
// AI ChatBot
import ChatBot from "../components/chatbot/ChatBot";


function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>


        {/* Main Website */}

        <Route 
          path="/" 
          element={<Home />} 
        />


        <Route 
          path="/about" 
          element={<About />} 
        />


        <Route 
          path="/products" 
          element={<Products />} 
        />


        <Route 
          path="/categories" 
          element={<Categories />} 
        />


        <Route 
          path="/gallery" 
          element={<Gallery />} 
        />


        <Route 
          path="/contact" 
          element={<Contact />} 
        />


        <Route 
          path="/product/:id" 
          element={<ProductDetails />} 
        />




        {/* Owner Panel */}


        <Route
          path="/owner/login"
          element={<OwnerLogin />}
        />


        <Route
          path="/owner/dashboard"
          element={<OwnerDashboard />}
        />



      </Routes>



      {/* 
        AI ChatBot
        All pages lo visible
      */}

      <ChatBot />


    </BrowserRouter>

  );

}


export default AppRoutes;