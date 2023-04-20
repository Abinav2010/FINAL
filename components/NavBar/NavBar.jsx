import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {MdNotifications} from 'react-icons/md';
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { Button } from "../componentsindex";
import images from "../../img";

import Style from './Navbar.module.css';
import { Discover, HelpCenter ,Notification, Profile , Sidebar } from "./index";

//import from smartcontract
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";


const NavBar = () => {
    //----USESTATE COMPONENTS
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const router=useRouter();

    const openMenu = (e) => {
        const btnText = e.target.innerText;
        if (btnText === "Discover") {
          setDiscover(!discover);
          setHelp(false);
          setNotification(false);
          setProfile(false);
        } else if (btnText === "Help Center") {
          setDiscover(false);
          setHelp(!help);
          setNotification(false);
          setProfile(false);
        } else {
          setDiscover(false);
          setHelp(false);
          setNotification(false);
          setProfile(false);
        }
      }
    
      const openNotification = () => {
        if (!notification) {
          setNotification(true);
          setDiscover(false);
          setHelp(false);
          setProfile(false);
        } else {
          setNotification(false);
        }
      };
    
      const openProfile = () => {
        if (!profile) {
          setProfile(true);
          setHelp(false);
          setDiscover(false);
          setNotification(false);
        } else {
          setProfile(false);
        }
      };
    
      const openSideBar = () => {
        if (!openSideMenu) {
          setOpenSideMenu(true);
        } else {
          setOpenSideMenu(false);
        }
      };
        

      //smartcontract
      const {currentAccount, connectWallet }=useContext(NFTMarketplaceContext);

      //useEffect(() => {
      //  connectWallet();
      //}, []);

     return (
       <div className={Style.navbar}>
         <div className={Style.navbar_container}>
           <div className={Style.navbar_container_left}>
             <div className={Style.logo}>
              <a href="/">
              <Image
                 src={images.logo}
                 alt="NFTMARKETPLACE"
                 width={80}
                 height={80}
                 style={{
                   maxWidth: "100%",
                   height: "auto"
                 }} />
                 </a>
                </div>
             <div className={Style.navbar_container_left_box_input}>
               <div className={Style.navbar_container_left_box_input_box}>
                 <input type="text" placeholder="Search NFT" />
                 <BsSearch onClick={() => {}} className={Style.search_icon} />
               </div>
             </div>
           </div>
   
           {/* //END OF LEFT SECTION */}
           <div className={Style.navbar_container_right}>
             <div className={Style.navbar_container_right_discover}>
               {/* DISCOVER MENU */}
               <p onClick={(e) => openMenu(e)}>Discover</p>
               {discover && (
                 <div className={Style.navbar_container_right_discover_box}>
                   <Discover />
                 </div>
               )}
             </div>
   
             {/* HELP CENTER MENU */}
             <div className={Style.navbar_container_right_help}>
               <p onClick={(e) => openMenu(e)}>Help Center</p>
               {help && (
                 <div className={Style.navbar_container_right_help_box}>
                   <HelpCenter />
                 </div>
               )}
             </div>
   
             {/* NOTIFICATION */}
             <div className={Style.navbar_container_right_notify}>
               <MdNotifications
                 className={Style.notify}
                 onClick={() => openNotification()}
               />
               {notification && <Notification />}
             </div>
   
             {/* CREATE BUTTON SECTION */}
             <div className={Style.navbar_container_right_button}>
              {
              currentAccount=="" ? (
              <Button btnName="Connect" handleClick={()=>connectWallet()} />
              ) : (
              <Button btnName="Create" handleClick={ () => router.push("/uploadNFT")}/>
              )}
         </div>
   
             {/* USER PROFILE */}
             
   
             <div className={Style.navbar_container_right_profile_box}>
               <div className={Style.navbar_container_right_profile}>
                 <Image
                   src={images.user11}
                   alt="Profile"
                   width={40}
                   height={40}
                   onClick={() => openProfile()}
                   className={Style.navbar_container_right_profile}
                   style={{
                     maxWidth: "100%",
                     height: "auto"
                   }} />
   
                 {profile && <Profile currentAccount={currentAccount}/>}
               </div>
             </div>
   
             {/* MENU BUTTON */}
   
             <div className={Style.navbar_container_right_menuBtn}>
               <CgMenuRight
                 className={Style.menuIcon}
                 onClick={() => openSideBar()}
               />
             </div>
           </div>
         </div>
   
         {/* SIDBAR CPMPONE/NT */}
         {openSideMenu && (
           <div className={Style.sideBar}>
             <Sidebar setOpenSideMenu={setOpenSideMenu}/>
           </div>
         )}
      </div>
     );
    };
    
    export default NavBar;