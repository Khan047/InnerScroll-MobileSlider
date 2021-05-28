import React,{useState,useEffect, useRef} from "react";
import ChefCardInfoSlider from "./ChefCardInfoSlider";
import ChefCardProfile from "./ChefCardProfile";
import styles from "./ChefCards.module.css";
import ChefCardSlider from "./ChefCardSlider";
import ChefCardWrapper from "./ChefCardWrapper";
import ChefMenuCategorySlider from "./ChefMenuCategorySlider";
import useLongPress from "../../hooks/useLongPress";
import Slider from "react-slick";
import nextId from "react-id-generator";
import { useSwipeable } from 'react-swipeable';
import "./sliderstyles.css"
const ChefCards = () => {
  const handlers = useSwipeable({
    onSwipedLeft: () => slideRef.current.slickNext(),
    onSwipedRight: () => slideRef.current.slickPrev(),
    preventDefaultTouchmoveEvent: false,
    trackMouse: true,
    delta: 280,  
  });
  const uniqueId = nextId();
  const slideRef = useRef();
  const [slideIndex, setslideIndex] = useState(0)
  const handleSwipeEnd = () => {

    let newSets = {
      ...sliSettigns,
      
    }
    // newSets['touchThreshold'] = 100;
    newSets['touchMove'] = true;
    setSliSettigns(newSets)
    //  slideRef.current.slickNext()
    console.log(slideRef,'index is =>',slideIndex)
  }
  const handleSwipeEnd2 = () => {

    let newSets = {
      ...sliSettigns,
      
    }
    // newSets['touchThreshold'] = 100;
    newSets['touchMove'] = false;
    setSliSettigns(newSets)
  }
  const settings = {
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: false,
    speed: 1000,
    mobileFirst: true,
    pauseOnHover: true,
    draggable: true ,
    swipe: true,
    swipeToSlide: true,
    touchMove: false,
    draggable: false,
    accessibility: false,
    arrows: false,
    adaptiveHeight:true,
    beforeChange : (prev, next) => {
      const prevSlideElement = slideRef.current.innerSlider.list.querySelector(`[data-index="${prev}"]`);
      const nextSlideElement = slideRef.current.innerSlider.list.querySelector(`[data-index="${next}"]`);
      console.log(prev, next)
      setTimeout(() => {
        // prevSlideElement.classList.remove('next-slide-anim');
        // nextSlideElement.classList.add('next-slide-anim');
        prevSlideElement.style.transform = "revert"
        prevSlideElement.style.transition = "all 500ms" 
        nextSlideElement.style.transform = "scale(1.1)"
        nextSlideElement.style.transition = "all 500ms" 
        nextSlideElement.style.zIndex  = "9999"
      //   w.style.transform = "scale(1.3)";
      // w.style.transform = "scale(1.3)";
      },100);
      
    },
    afterChange: function (current,index) {
      let w = slideRef.current.innerSlider.list.querySelector(`[data-index="0"]`)
      
        // console.log( "curr,in",current,w,)
    }
 
  };
  const [sliSettigns, setSliSettigns] = useState(settings)

  // beforeChange: (current, next) => {
  //   console.log(slideIndex)
  //   setslideIndex(next)
  //   console.log(slideIndex)
  // },
  // afterChange: function() {
  //   console.log('slide has been moved');
  //   setSliSettigns({
  //     ...sliSettigns,
  //     touchMove:!slideRef.current.props.touchMove ,})
  // }
 
  const [swipeable, setSwipealbe] = useState(false)
  const onLongPress = () => {
    console.log('longpress is triggered');
    // setSwipealbe(true)
    // handleSwipeEnd()
    // console.log(slideRef);
    // setSliSettigns({
    //   ...sliSettigns,
    //   touchMove:!slideRef.current.props.touchMove ,}
    // )
    // slideRef.current.slickNext();
   
  
};

  const onClick = () => {
      console.log('click is triggered')
  }
  let touchedTarget = '';
const onTouchStartHandler = (e) => {
  touchedTarget = e.target;
  console.log('touched', touchedTarget,e)
  if (touchedTarget.classList.contains("ChefCardSlider")) {
    console.log('can swipe now')
  }
  else {
    console.log('cant swipe')
  }
}
  const onTouchMoveHandler = (e) => {
  let x = e.changedTouches[0].pageX
      // console.log('Moving', x,)
    if (x >=3.5 || x <= 0.3 ) {
      //  slideRef.current.slickNext()
    }
    var direction = "",
      oldx = 180;
    
        if(x < oldx) {
          direction = "left"
          if (x < oldx / 3) {
             slideRef.current.slickNext()
            oldx = 180;
          }
        } else if (x > oldx) {
          direction = "right"
          if (x > oldx * 2) {
             slideRef.current.slickPrev()
            oldx = 180;
          }
        }

    oldx = x;
    // console.log(direction,x,oldx)
}
const onTouchEndHandler = (e) => {
  console.log('touche ended')
}
  const defaultOptions = {
      shouldPreventDefault: true,
      delay: 1000,
  };
   const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);
  useEffect(() => {
    //  const uniqueId = nextId();
    // console.log(uniqueId)
    // setslideIndex(setslideIndex+1)
    // slideRef.current.slickGoTo(slideIndex)
    // onTouchStart={onTouchStartHandler}
    //   onTouchMove={onTouchMoveHandler}
    //   onTouchEnd = {onTouchEndHandler}onClickEvent={longPressEvent}
  }, [])
  return (
    <div className="swipehere" key={uniqueId} 
       {...handlers}
      
    >
      <Slider  {...sliSettigns} ref={slideRef}>
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
