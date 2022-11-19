import React from "react";
import css from "./virtual.module.css";
import Shade from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import before from "../../assets/before.png";
import after from "../../assets/after.png";

const Virtual = () => {
  return (
    <div className={css.virtual}>
      <div className={css.left}>
        <span>Virtual try one</span>
        <span>Never buy the wrong shade again</span>
        <span>Try Now!</span>
        <img src={Shade} alt="shade" />
      </div>
      <div className={css.right}>
        <div className={css.wrapper}>
          <ReactCompareImage leftImage={before} rightImage={after} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
