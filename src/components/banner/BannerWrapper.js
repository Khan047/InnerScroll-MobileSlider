import React from "react";
import styles from "./BannerWrapper.module.css";

const BannerWrapper = (props) => {
  return (
    <section className={styles["banner"]}>
      <div
        className={`${styles["banner-wrapper"]} ${styles["active"]}`}
        id="banner_wrapper"
      >
        <div className={styles["banner-slider"]}>{props.children}</div>
        <span className={styles["banner-slider-info"]}></span>
      </div>
      {/* <div class="offer-div" id="offer_div">
        <p>Click the button to check existing offers in your area!</p>
      </div> */}
      <button
        type="button"
        className={`${styles["btn"]} ${styles["btn-bell"]}`}
        id="btn_offer"
      >
        <img
          src="images/bell_open.svg"
          alt=""
          className={`${styles["btn"]} ${styles["btn-bell"]}`}
          id="bell_open"
        />
        <img
          src="images/bell_close.svg"
          alt=""
          className={styles["bell-close"]}
          id="bell_close"
        />
      </button>
    </section>
  );
};

export default BannerWrapper;
