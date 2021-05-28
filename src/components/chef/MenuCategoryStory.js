import React from 'react';
import styles from "./ChefCards.module.css";

const MenuCategoryStory = (props) => {
  return (
    <a href="#">
      <span className={`${styles["dish-img-span"]} ${props.ringClass}`}>
        <img
          src={props.img}
          alt={props.alt}
          className={styles["dish-img"]}
        />
      </span>
      <figcaption>{props.caption}</figcaption>
    </a>
  );
};

export default MenuCategoryStory;
