import React from "react";
import css from "./hero.module.css";
import HeroImage from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = {
    duration: 3,
    type: "spinner",
  };
  return (
    <div className={css.container}>
      {/* left sides */}
      <div className={css.h_sides}>
        <span className={css.text1}>Skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy collection</span>
          <span>
            Seedily say has suitable disposal and boy.Exercise joy man children
            rejoiced
          </span>
        </div>
      </div>

      {/* middle side */}

      <div className={css.wrapper}>
        {/* blue circle */}
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className={css.blueCircle}
        ></motion.div>

        {/* hero image */}
        <motion.img
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          src={HeroImage}
          alt="pictures"
          width={600}
        />
        <div className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best Signup offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}

      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly traffic</span>
        </div>
        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
