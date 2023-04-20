import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./Slider.module.css";
import SliderCard from "./SliderCard/SliderCard";
import images from "../../img";

const Slider = () => {
  const FollowingArray = [
    {
      background: "https://media.giphy.com/media/wKNShEiXo1V5SFwyMa/giphy.gif",
      user: images.user3,
    },
    {
      background: "https://media.giphy.com/media/18U4pTzJWZiP6/giphy.gif",
      user: images.user4,
    },
    {
      background: "https://media.giphy.com/media/idKFx1AUCg1Yk/giphy.gif",
      user: images.user5,
    },
    {
      background: "https://media.giphy.com/media/xT9IgH0fInLY2LCDPa/giphy.gif",
      user: images.user6,
    },
    {
      background: "https://media.giphy.com/media/PKPEKVWrBrtNXDnNgs/giphy.gif",
      user: images.user1,
    },
    {
      background: "https://media.giphy.com/media/XoifSi9xQByxcc3w7Y/giphy.gif",
      user: images.user2,
    },
  ];
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  });

  const handleScroll = (direction) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction == "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className={Style.slider}>
      <div className={Style.slider_box}>
        <h2>Explore NFTs Video</h2>
        <div className={Style.slider_box_button}>
          <p>Click on play icon & enjoy Nfts Video</p>
          <div className={Style.slider_box_button_btn}>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("left")}
            >
              <TiArrowLeftThick />
            </div>
            <div
              className={Style.slider_box_button_btn_icon}
              onClick={() => handleScroll("right")}
            >
              <TiArrowRightThick />
            </div>
          </div>
        </div>

        <motion.div className={Style.slider_box_itmes} ref={dragSlider}>
          <motion.div
            ref={dragSlider}
            className={Style.slider_box_item}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {FollowingArray.map((el, i) => (
              <SliderCard key={i + 1} el={el} i={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;