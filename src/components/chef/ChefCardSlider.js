import React from "react";
import styles from "./ChefCardSlider.module.css";

const ChefCardSlider = (props) => {
  return (
    <button className={`${styles["slick-item"]} ${styles["slide-button"]}`} {...props.onClickEvent}>
      <div className={styles["slider-item"]}>{props.children}</div>
    </button>
  );
};

export default ChefCardSlider;
