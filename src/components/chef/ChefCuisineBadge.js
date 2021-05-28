import React from "react";
import baseStyle from "../BaseStyle.module.css";
import styles from "./ChefCards.module.css";

const ChefCuisineBadge = () => {
  return (
    <div className={styles["btn-chef-div"]}>
      <a
        className={`${baseStyle["btn"]} ${styles["btn-chef"]}`}
        href="#"
        role="button"
      >
        Continental Chef
      </a>
    </div>
  );
};

export default ChefCuisineBadge;