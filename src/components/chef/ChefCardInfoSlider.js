import React from "react";
import styles from "./ChefCards.module.css";
import ChefCardInfo from "./ChefCardInfo";

const ChefCardInfoSlider = (props) => {
  return (
    <div className={`${styles["row"]} ${styles["organisation"]}`}>
      <div className={`${styles["col-12"]} ${styles["org-col"]}`}>
        <h4 className={styles["card-title"]}>Organisation</h4>
        <div className={`${styles["organisation-slider"] } ${styles["org-scroller"] } `}>
          <div className={styles["org-slick-item"]}>
            <div className={styles["org-slider-item"]}>
              <ChefCardInfo
                img="images/marriot.png"
                header="JW Marriott"
                desc="Mumbai - 1 year"
              />
            </div>
          </div>
          <div className={styles["org-slick-item"]}>
            <div className={styles["org-slider-item"]}>
              <ChefCardInfo
                img="images/marriot.png"
                header="JW Marriott"
                desc="Mumbai - 1 year"
              />
            </div>
          </div>
          <div>
            <div className={styles["org-slider-item"]}>
              <ChefCardInfo
                img="images/marriot.png"
                header="JW Marriott"
                desc="Mumbai - 1 year"
              />
            </div>
          </div>
          <div>
            <div className={styles["org-slider-item"]}>
              <ChefCardInfo
                img="images/marriot.png"
                header="JW 2 Marriott"
                desc="Mumbai - 5 year"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCardInfoSlider;
