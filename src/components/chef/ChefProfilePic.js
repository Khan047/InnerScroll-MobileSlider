import React from "react";
import styles from "./ChefCards.module.css";


const ChefProfilePic = () => {
  return (
    <div className={styles["profile-right"]}>
      <figure className={styles["profile-figure"]}>
        <span className={styles["img-ring-red"]}>
          <img src="images/chef-profile.jpg" alt="profile image" />
        </span>
      </figure>
    </div>
  );
};

export default ChefProfilePic;
