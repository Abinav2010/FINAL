import React, { useEffect, useState, useContext } from "react";

import Style from "../styles/searchPage.module.css";
import { Slider, Brand, Loader,AudioLive } from "../components/componentsindex";
import { SearchBar } from "@/SearchPage/searchBarIndex";
import { Filter } from "../components/componentsindex";

import { NFTCardTwo, Banner } from "../collectionPage/collectionIndex";
import images from "../img";


//SmartContract
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
const searchPage = () => {

  const {fetchNFTs}=useContext(NFTMarketplaceContext);

  const[nfts,setNfts]=useState([]);
  const[nftsCopy,setNftsCopy]=useState([]);


const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(()=>{
    fetchNFTs().then((item)=>{
      setNfts(item.reverse());
      setNftsCopy(item);
      console.log(nfts)
    });
    }, []);

    const onHandleSearch = (value) => {
      const filteredNFTS = nfts.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
  
      if (filteredNFTS.length === 0) {
        setNfts(nftsCopy);
      } else {
        setNfts(filteredNFTS);
      }
    };


    const onClearSearch = () => {
      if (nfts.length && nftsCopy.length) {
        setNfts(nftsCopy);
      }
    };

     //const collectionArray = [
     //images.nft_image_1,
     //images.nft_image_2,
     //images.nft_image_3,
     //images.nft_image_1,
     //images.nft_image_2,
     //images.nft_image_3,
     //images.nft_image_1,
     //images.nft_image_2,
   //];

    return (
        <div className={Style.searchPage}>
          <Banner bannerImage={images.searchgif} />
          <SearchBar 
          onHandleSearch ={onHandleSearch}
          onClearSearch={onClearSearch}
          />
          <Filter />
          {nfts.length == 0 ? <Loader /> : <NFTCardTwo NFTData={nfts} />}
          
          <Slider />

        </div>
      );
    };

export default searchPage