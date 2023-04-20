import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./AudioCard.module.css";
import images from "../../../img";
import LikeProfile from "../../LikeProfile/LikeProfile";

const AudioCard = (src) => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  const playMusic = () => {
    const audio = new Audio("https://biosafe-app.infura-ipfs.io/ipfs/QmYUix7KsanX5B4y3XaqeUyfBZwvRrKdAbCXVFA7c5mEKW");
    if (!play) {
      audio.play();
      setPlay(true);
    } else {
      audio.pause();
      setPlay(false);
    }
  };
  
  
  return (
    <div className={Style.audioCard}>
      <div className={Style.audioCard_box}>
        <div className={Style.audioCard_box_like_time}>
          <div className={Style.audioCard_box_like} onClick={() => likeNft()}>
            {like ? (
              <AiFillHeart className={Style.audioCard_box_like_icon} />
            ) : (
              <AiOutlineHeart
                className={Style.audioCard_box_like_icon_unlike}
              />
            )}

            <span>24</span>
          </div>

          <div className={Style.audioCard_box_time}>
            <div className={Style.audioCard_box_like_time_remaing}>
              <small></small>
              <h5></h5>
            </div>
          </div>
        </div>

       
 <div className={Style.audioCard_box_player}>
          <Image src={images.musiceWave} alt="musice" width={200} />
          <div
            className={Style.audioCard_box_musicPlayer}
            onClick={() => { playMusic();
            console.log( "https://biosafe-app.infura-ipfs.io/ipfs/QmYUix7KsanX5B4y3XaqeUyfBZwvRrKdAbCXVFA7c5mEKW");
          }}
          >
            {play ? (
              <div className={Style.audioCard_box_musicPlayer_icon}>
                <TbPlayerPause />
              </div>
            ) : (
              <div className={Style.audioCard_box_musicPlayer_icon}>
                <TbPlayerPlay />
              </div>
            )}
          </div>
        </div>

        <div className={Style.audioCard_box_details}>
          <div className={Style.audioCard_box_details_info}>
            <h4>Checking</h4>
            <div className={Style.audioCard_box_details_info_price}>
              <small>Price</small>
              <p>30.000 ETH</p>
            </div>
          </div>

          <div className={Style.audioCard_box_details_stock}>
            
            <small></small>
          </div>
        </div>

        <div className={Style.audioCard_box_img}>
          <Image
            src="https://media.giphy.com/media/lqSDx8SI1916ysr4eq/giphy.gif"
            alt="background"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioCard;