import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import OfferBanner from "../components/OfferBanner/OfferBanner";
import Categories from "../components/Categories/Categories";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Gallery from "../components/Gallery/Gallery";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <Hero />

      <OfferBanner />

      <Categories />

      <FeaturedProducts />

      <WhyChooseUs />

      <Gallery />

      <Testimonials />

      <Footer />
    </>
  );
}

export default MainLayout;