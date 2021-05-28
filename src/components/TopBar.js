import React from "react";
import LocationIcon from "./location/LocationIcon";
import LocationSelection from "./location/LocationSelection";
import SearchButton from "./SearchButton";
import styles from "./TopBar.module.css";

const TopBar = () => {
  return (
    <ul class={styles["search-nav"]}>
      <LocationIcon />
      <LocationSelection />
      <SearchButton />
    </ul>
  );
};

export default TopBar;
