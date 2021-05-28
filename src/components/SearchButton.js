import React from "react";
import styles from "./SearchButton.module.css";

const SearchButton = () => {
  return (
    <li className={styles["search-btn-div"]}>
      <button
        className={`${styles["btn"]} ${styles["btn-search"]}`}
        type="button"
      >
        <img src="images/search.svg" alt="search" />
      </button>
    </li>
  );
};

export default SearchButton;
