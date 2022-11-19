import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SliderProducts } from "../../data/products";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        navigation={true}
      >
        {SliderProducts.map((slide, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="left-s">
                <div className="name">
                  <span>{slide.name}</span>
                  <span>{slide.detail}</span>
                </div>
                <span>{slide.price}$</span>
                <div>Shop now</div>
              </div>
              <img src={slide.img} alt="prodcut" className="img-p" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
