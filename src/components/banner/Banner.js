import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div>
      <div className={styles["banner-slider-item"]}>
        <img
          src="images/2.png"
          alt="banner"
          loading="lazy"
          className={styles["banner-img"]}
        />
        <div className={styles["banner-caption"]}>
          <figure>
            <img
              src="images/logo.png"
              alt="logo"
              loading="lazy"
              className={styles["logo"]}
            />
          </figure>
          <h4 className={styles["title-1"]}>Up To 50% OFF*</h4>
          <p className={styles["title-2"]}>+ Extra 10% Cashback</p>
          <div className={styles["btn-order-div"]}>
            <a
              href="#"
              className={`${styles["btn-order"]} ${styles["btn-order"]}`}
              role="button"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;