import React from "react";
import styles from "./ChefCards.module.css";

const ChefName = () => {
  return (
    <div className={styles["chef-detail"]}>
      <h4 className={styles["chef-name"]}>Satish Bhosle</h4>
      <a href="#" className={styles["btn-view-profile"]} role="button">
        View detailed profile <span>&#062;&#062;</span>
      </a>
    </div>
  );
};

export default ChefName;
