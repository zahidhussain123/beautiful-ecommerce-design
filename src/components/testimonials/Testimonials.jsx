import React from "react";
import css from "./testimonial.module.css";
import Hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
const Testimonials = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top rated</span>
          <span>
            Seedily say has suitable and boy.Exercise joy man children rejoiced
          </span>
        </div>
        <img src={Hero} alt="hero" />
        <div className={css.container}>
          <span>100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>
      <div className={css.reviews}>Reviews</div>
      <div className={css.carousal}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tCarousal}
          breakpoints={{
            856: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {TestimonialsData.map((slide, i) => {
            return (
              <SwiperSlide key={i}>
                <div className={css.testimonial}>
                  <img src={slide.image} alt="person" />
                  <span>{slide.comment}</span>
                  <hr />
                  <span>{slide.name}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
