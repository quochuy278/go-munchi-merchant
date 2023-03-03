import { useState } from "react";
import useSound from "use-sound";
import music from "../../assets/sounds/song.mp3";
import CenterContainer from "../../components/Container/CenterContainer";
import Order from "../../components/Order/Order";

export const HomePage = () => {


  return (
    <CenterContainer>
     <Order/>
    </CenterContainer>
  );
};
