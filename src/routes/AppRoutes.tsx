import { BrowserRouter, Routes, Route } from "react-router-dom";


// ChatBot Component
import ChatBot from "../components/chatbot/ChatBot";


// Pages

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
import LoginPage from "../pages/LoginPage";


// Customer Orders

import MyOrders from "../pages/MyOrders";
import TrackOrder from "../pages/TrackOrder";


// Owner Pages

import OwnerLogin from "../pages/OwnerLogin";
import OwnerDashboard from "../pages/OwnerDashboard";





function AppRoutes(){


return(


<BrowserRouter>


<Routes>




{/* ==========================
      MAIN WEBSITE ROUTES
=========================== */}



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






{/* ==========================
      CUSTOMER LOGIN
=========================== */}



<Route

path="/login"

element={<LoginPage />}

/>






{/* ==========================
      CUSTOMER ORDER SECTION
=========================== */}



<Route

path="/my-orders"

element={<MyOrders />}

/>





<Route

path="/track-order"

element={<TrackOrder />}

/>









{/* ==========================
      OWNER ADMIN PANEL
=========================== */}





{/* Hidden Admin Login */}

<Route

path="/greenbasket-admin"

element={<OwnerLogin />}

/>






{/* Normal Owner Login */}

<Route

path="/owner/login"

element={<OwnerLogin />}

/>







{/* Owner Dashboard */}

<Route

path="/owner/dashboard"

element={<OwnerDashboard />}

/>





</Routes>





{/* AI CHATBOT */}

<ChatBot />



</BrowserRouter>


);


}



export default AppRoutes;