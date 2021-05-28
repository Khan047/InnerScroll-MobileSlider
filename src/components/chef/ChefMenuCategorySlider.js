import React from "react";
import styles from "./ChefCards.module.css";
import MenuCategoryStory from "./MenuCategoryStory";

const ChefMenuCategorySlider = () => {
  return (
    <div className={`${styles["row"]} ${styles["cuisine"]}`}>
      <div className={styles["col-12"]}>
        <h4 className={styles["card-title"]}>Cuisine Speciality</h4>
      </div>
      <div className={styles["cuisine-slider-wrapper"]}>
        <div className={styles["cuisine-slider"]}>
          <div>
            <div className={styles["cuisine-slider-item"]}>
              <MenuCategoryStory
                img="images/salad.png"
                alt="Salad"
                caption="Salad"
                ringClass={styles["ring-green"]}
              />
            </div>
          </div>
          <div>
            <div className={styles["cuisine-slider-item"]}>
              <MenuCategoryStory
                img="images/pizza.png"
                alt="Pizza"
                caption="Pizza"
                ringClass={styles["ring-orange"]}
              />
            </div>
          </div>
          <div>
            <div className={styles["cuisine-slider-item"]}>
              <MenuCategoryStory
                img="images/pasta.png"
                alt="Pasta"
                caption="Pasta"
                ringClass={styles["ring-orange"]}
              />
            </div>
          </div>
          <div>
            <div className={styles["cuisine-slider-item"]}>
              <MenuCategoryStory
                img="images/flatbreads.png"
                alt="Flatbreads"
                caption="Flatbreads"
                ringClass={styles["ring-orange"]}
              />
            </div>
          </div>
          <div>
            <div className={styles["cuisine-slider-item"]}>
              <MenuCategoryStory
                img="images/burger.png"
                alt="Burger"
                caption="Burger"
                ringClass={styles["ring-red"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefMenuCategorySlider;
