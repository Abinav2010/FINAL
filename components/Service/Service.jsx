import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../img";
const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Search for your favourite artist and discover new interests.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="Filter & Discover"
            width={100}
            height={100}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Connect your wallet</h3>
          <p>
            Connect with wallet using any 1 service.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="Connect Wallet"
            width={100}
            height={100}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Discover,follow,Create</h3>
          <p>
            Discover, buy NTFs, sell your NFTs and create your own NFT
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Start trading</h3>
          <p>
            Sell,Publish,Trade NFT's to show your support and create your collection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;