import React from "react";
import baseStyle from "../BaseStyle.module.css";
import ChefCardInfo from "./ChefCardInfo";
import styles from "./ChefCards.module.css";
import ChefCuisineBadge from "./ChefCuisineBadge";
import ChefName from "./ChefName";
import ChefProfilePic from "./ChefProfilePic";

const ChefCardProfile = () => {
  return (
    <div className={`${baseStyle["row"]} ${styles["profile"]}`}>
      <div className={`${baseStyle["col-6"]} ${styles["profile-left"]}`}>
        <ChefCuisineBadge />
        <ChefName />
        <ChefCardInfo
          img="images/experiance.svg"
          header="8 years"
          desc="of overall experience"
        />
      </div>
      <ChefProfilePic />
      <div className={`${baseStyle["col-12"]} ${styles["profile-bottom"]}`}>
        <div className={baseStyle["row"]}>
          <ChefCardInfo
            img="images/ihm.png"
            header="IHM, Goa"
            desc="Educational Qualification"
            additionalClasses={baseStyle["col-6"]}
          />
          <ChefCardInfo
            img="images/ihm.png"
            header="IHM, Goa"
            desc="Educational Qualification"
            additionalClasses={baseStyle["col-6"]}
          />
        </div>
      </div>
    </div>
  );
};

export default ChefCardProfile;
