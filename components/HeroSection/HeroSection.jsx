import React,{useState,useEffect,useContext} from "react";
import Image from "next/image";


//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

//SmartContract
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext"; 


const HeroSection = () => {
  const{titleData}=useContext(NFTMarketplaceContext);

   return (
     <div className={Style.heroSection}>
       <div className={Style.heroSection_box}>
         <div className={Style.heroSection_box_left}>
           <h1> {titleData}</h1>
           <p>
           Discover the most original NTFs in all genres. Create
             your own NTFs and sell them and support creators.
           </p>
           <Button
             btnName="Start your search"
             handleClick={() => router.push("/searchPage")}
           />
         </div>
         <div className={Style.heroSection_box_right}>
           <Image
             src={images.hero}
             alt="Hero section"
             width={900}
             height={700}
             style={{
               maxWidth: "100%",
               
             }} />
         </div>
       </div>
     </div>
   );
};

export default HeroSection;