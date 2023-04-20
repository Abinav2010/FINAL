import React from "react";

//INTERNAL IMPORT
import Style from "./AudioLive.module.css";
import AudioCard from "./AudioCard/AudioCard";
import AudioCardSmall from "./AudioCardSmall/AudioCardSmall";

const AudioLive = () => {
  return (
    <div className={Style.audioLive}>
      <div className={Style.audioLive_box}>
        <div className={Style.audioLive_box_left}>
          <AudioCard />
          
        </div>
        <div className={Style.audioLive_box_right}>
          
        </div>
      </div>
    </div>
  );
};

export default AudioLive;