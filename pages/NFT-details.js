import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";


import { Button, Category, Brand, NFTCard } from "../components/componentsindex";
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";

//IMPORT SMART CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
import { NFTCardTwo } from "@/collectionPage/collectionIndex";
const NFTDetails = () => {
  const { currentAccount } = useContext(NFTMarketplaceContext);
  const [nft, setNft] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
  });
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setNft(router.query);
  }, [router.isReady]);

  return (
    <div>
        <NFTDetailsPage nft={nft} />
        <NFTCardTwo/>
        
    </div>
  );
};

export default NFTDetails;