import React from "react";
import styles from "./LocationIcon.module.css";

const LocationIcon = () => {
  return (
    <li className={styles["select-location-img"]}>
      <span className={styles["span-loc-img"]}>
        <img src="images/location.svg" alt="location" />
      </span>
    </li>
  );
};

export default LocationIcon;
