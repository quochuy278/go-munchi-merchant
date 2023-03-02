import { useState } from "react";
import useSound from "use-sound";
import music from "../../assets/sounds/song.mp3";
import CenterContainer from "../../components/Container/CenterContainer";
import Order from "../../components/Order/Order";

export const HomePage = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [playBoop, { stop, pause }] = useSound(music, {
    volume: 1,
    interrupt: false,
    loop: true,
  });
  const onCloseDialog = () => {
    setModal(false);
    pause();
  };
  const onStop = () => {
    setModal(false);

    stop();
  };
  const onHandleModal = () => {
    setModal(true);

    playBoop();
  };

  return (
    <CenterContainer>
     <Order/>
    </CenterContainer>
  );
};
