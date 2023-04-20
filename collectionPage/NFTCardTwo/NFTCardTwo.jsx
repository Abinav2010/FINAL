import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import Link from "next/link";


//INTERNAL IMPORT
import Style from "./NFTCardTwo.module.css";
import { LikeProfile } from "../../components/componentsindex";

const NFTCardTwo = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(23 + 1);
    }
  };

  return (
    <div className={Style.NFTCardTwo}>
        {NFTData?.map((el, i) => (
        <Link href={{ pathname: "/NFT-details", query: el }} key={i + 1}>
          <div className={Style.NFTCardTwo_box} key={i + 1}>
            <div className={Style.NFTCardTwo_box_like}>
              <div className={Style.NFTCardTwo_box_like_box}>
                <div className={Style.NFTCardTwo_box_like_box_box}>
                  <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                  
                </div>
              </div>
            </div>

            <div className={Style.NFTCardTwo_box_img}>
              <Image
                src={el.image}
                onError={(e) => { e.target.onerror = null;
                e.target.src = 'user1' }} 
                alt="NFT" 
                width={500}
                height={500}
                objectFit="cover"
                className={Style.NFTCardTwo_box_img_img}
              />
            </div>

            <div className={Style.NFTCardTwo_box_info}>
              <div className={Style.NFTCardTwo_box_info_left}>
                <p>{el.name}</p>
              </div>
              </div>


            <div className={Style.NFTCardTwo_box_price}>
              <div className={Style.NFTCardTwo_box_price_box}>
                <small>Current Price</small>
                <p>{el.price || i + 4}00 ETH</p>
              </div>
              <p className={Style.NFTCardTwo_box_price_stock}>
                
              </p>
            </div>
          </div>
          </Link>
        ))}
    </div>
  );
};

export default NFTCardTwo;