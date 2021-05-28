import React from "react";
import styles from "./ChefCards.module.css";

const ChefCardInfo = (props) => {
  return (
    <div className={`${styles["media"]} ${props.additionalClasses}`}>
      <figure className={styles["media-image"]}>
        <img src={props.img} alt="experiance" />
      </figure>
      <div className={styles["media-body"]}>
        <h5>{props.header}</h5>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ChefCardInfo;
