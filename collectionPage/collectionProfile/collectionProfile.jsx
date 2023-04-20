import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./collectionProfile.module.css";
import images from "../../img";
import img from "../../img";

const collectionProfile = () => {
  const cardArray = [1, 2, 3, 4];
  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
          <Image
            src={img.nft_image_1}
            alt="nft image"
            width={300}
            height={300}
            className={Style.collectionProfile_box_left_img}
          />

          <div className={Style.collectionProfile_box_left_social}>
            <a href="https://www.instagram.com/playvalorantofficial/?hl=en">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
          </div>
        </div>

        <div className={Style.collectionProfile_box_middle}>
          <h1>Awesome Valorant Collection!!!</h1>
          <p>
          Valorant is a 5v5 shooter game that was released on 2019.Valorant maintained an estimated total of 18 million active players throughout January 2023,
           according to Tracker Network.18.8 million players have jumped into at least one game of Valorant over the past 30 days, based on the available data.
           Such a growing market has a huge reach and this collection is destined to grow in demand.
          </p>

          <div className={Style.collectionProfile_box_middle_box}>
            {cardArray.map((el, i) => (
              <div
                className={Style.collectionProfile_box_middle_box_item}
                key={i + 1}
              >
                <small>Floor price</small>
                <p>${i + 1}95,4683</p>
                <span>+ {i + 2}.11%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default collectionProfile;