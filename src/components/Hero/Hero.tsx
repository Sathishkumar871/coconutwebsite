import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import "./Hero.css";


const Hero: React.FC = () => {


  const swiperRef = useRef<any>(null);

  const navigate = useNavigate();



  const images = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/hero4.jpg",
    "/images/hero5.jpg"
  ];



  return (

    <section className="hero">


      <div className="container hero-content">



        <div className="hero-left">


          <span className="badge">
            🌴 Premium Products Export
          </span>



          <h1>
            Nature’s Gold,
            <br />
            <span>
              Refined for You
            </span>
          </h1>



          <p>
            Experience the purity of organic products.
            Farm-fresh, ethically sourced, and globally certified.
          </p>




          <button
            className="cta-btn"
            onClick={() => navigate("/track-order")}
          >

            📦 Track Order

          </button>



        </div>





        <div className="hero-right">


          <button
            className="nav-btn prev"
            onClick={() =>
              swiperRef.current?.slidePrev()
            }
          >
            ❮
          </button>





          <Swiper

            onSwiper={(swiper)=>
              (swiperRef.current = swiper)
            }

            effect="cards"

            grabCursor={true}

            loop={true}

            autoplay={{
              delay:2500,
              disableOnInteraction:false
            }}

            modules={[
              EffectCards,
              Autoplay,
              Navigation
            ]}

            className="mySwiper"


          >


            {
              images.map(
                (url,index)=>(

                <SwiperSlide
                  key={index}
                  className="card-box"
                >

                  <img
                    src={url}
                    alt="Product"
                  />

                </SwiperSlide>

                )

              )
            }



          </Swiper>






          <button
            className="nav-btn next"
            onClick={() =>
              swiperRef.current?.slideNext()
            }
          >

            ❯

          </button>




        </div>



      </div>



    </section>

  );

};


export default Hero;