import React,{useState,useEffect, useRef} from "react";
import ChefCardInfoSlider from "./ChefCardInfoSlider";
import ChefCardProfile from "./ChefCardProfile";
import styles from "./ChefCards.module.css";
import ChefCardSlider from "./ChefCardSlider";
import ChefCardWrapper from "./ChefCardWrapper";
import ChefMenuCategorySlider from "./ChefMenuCategorySlider";
import Slider from "react-slick";
import { useSwipeable } from 'react-swipeable';
import "./sliderstyles.css"
const ChefCards = () => {
  const handlers = useSwipeable({
    onSwipedLeft: () => slideRef.current.slickNext(),
    onSwipedRight: () => slideRef.current.slickPrev(),
    preventDefaultTouchmoveEvent: false,
    trackMouse: true,
    delta: 190,   //control swipe length
  });

  const slideRef = useRef();


 
  const settings = {
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: false,
    speed: 1300,
    mobileFirst: true,
    pauseOnHover: true,
    draggable: true ,
    swipe: true,
    swipeToSlide: true,
    touchMove: false,
    draggable: false,
    accessibility: false,
    arrows: false,
    adaptiveHeight: false,
    infinite:true,
    beforeChange : (prev, next) => {
      const prevSlideElement = slideRef.current.innerSlider.list.querySelector(`[data-index="${prev}"]`);
      const nextSlideElement = slideRef.current.innerSlider.list.querySelector(`[data-index="${next}"]`);
      setTimeout(() => {
        prevSlideElement.style.transform = "scale(0.85)"
        prevSlideElement.style.transition = "all 500ms ease-in-out" 
        nextSlideElement.style.transform = "scale(1.11) translateY(3.9%)"
        nextSlideElement.style.transition = "all 500ms  ease-in-out"         
      },1);
      
    },
  
 
  };
  

 
  return (
    <div className="swipehere" 
       {...handlers}
      
    >
      <Slider  {...settings} ref={slideRef}>
      <ChefCardWrapper id={'s0'} >
        {/* <button  {...longPressEvent}>sdad</button> */}
       
      <ChefCardSlider >
        <ChefCardProfile/>
        <ChefCardInfoSlider/>
        <ChefMenuCategorySlider />
        <div className={styles["menu-wrapper"]}>
          <button className={`${styles["btn"]} ${styles["btn-menu"]}`}>
            <figure>
              <img src="images/icon-menu.svg" alt="menu" />
            </figure>
            <span>Menu1</span>
          </button>
        </div>
      </ChefCardSlider>
      </ChefCardWrapper>
      <ChefCardWrapper id={'s1'}>
      <ChefCardSlider>
        <ChefCardProfile/>
        <ChefCardInfoSlider/>
        <ChefMenuCategorySlider />
        <div className={styles["menu-wrapper"]}>
          <button className={`${styles["btn"]} ${styles["btn-menu"]}`}>
            <figure>
              <img src="images/icon-menu.svg" alt="menu" />
            </figure>
            <span>Menu2</span>
          </button>
        </div>
      </ChefCardSlider>
      </ChefCardWrapper>
      <ChefCardWrapper id={'s2'}>
      <ChefCardSlider>
        <ChefCardProfile/>
        <ChefCardInfoSlider/>
        <ChefMenuCategorySlider />
        <div className={styles["menu-wrapper"]}>
          <button className={`${styles["btn"]} ${styles["btn-menu"]}`}>
            <figure>
              <img src="images/icon-menu.svg" alt="menu" />
            </figure>
            <span>Menu3</span>
          </button>
        </div>
          </ChefCardSlider>
        
        </ChefCardWrapper>
        </Slider>
      </div>
  );
};

export default ChefCards;
