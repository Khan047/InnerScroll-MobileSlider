import React from "react";
import styles from "./ChefCardWrapper.module.css";

const ChefCardWrapper = (props) => {
  return (
    <section className={styles["section-slider-wrapper"]}>
      <section className={styles["slider"]}>{props.children}</section>
    </section>
  );
};

export default ChefCardWrapper;
