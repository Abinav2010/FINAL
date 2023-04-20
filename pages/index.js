import React, { useRef,useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,
  Video,
  Loader,
} from "../components/componentsindex";
import { getTopCreators } from "../TopCreators/TopCreators";

//IMPORTING CONTRCT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
import { NFTCardTwo } from "@/collectionPage/collectionIndex";

const Home = () => {
  const { checkIfWalletConnected, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
     if (currentAccount) {
    fetchNFTs().then((items) => {
      console.log(nfts);
      setNfts(items.reverse());
      setNftsCopy(items);
    });
     }
  }, []);

  const audioElem=useRef();

  //CREATOR LIST

  const creators = getTopCreators(nfts);
  // console.log(creators);

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive src="https://biosafe-app.infura-ipfs.io/ipfs/QmYUix7KsanX5B4y3XaqeUyfBZwvRrKdAbCXVFA7c5mEKW" 
      ref ={audioElem} />
      {creators.length == 0 ? (
        <Loader />
      ) : (
        <FollowerTab TopCreator={creators} />
      )}

      <Slider />
      
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}
      <NFTCardTwo />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;