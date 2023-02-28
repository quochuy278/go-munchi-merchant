import CenterContainer from "../../components/Container/CenterContainer";
import { useAppSelector } from "../../store/hooks";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { selectSession, set as setSessionState } from "../../store/slices/session";
import { Button } from "@mui/material";
import { LocalNotifications } from "@capacitor/local-notifications";
import { useState } from "react";
import Modal from "../../components/Dialog/Dialog";
import FactoryDialog from "../../components/Dialog/Dialog";
import useSound from "use-sound";
import music from "../../assets/sounds/song.mp3";
import { io } from "socket.io-client";
import useWebSocket, { ReadyState, useSocketIO } from "react-use-websocket";
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
  // const onHandleClick = async (event: any) => {
  //   await LocalNotifications.schedule({
  //     notifications: [
  //       {
  //         id: 1,
  //         title: "Tesing from Huy",
  //         body: "tesing this shitty functionality",
  //         sound: "beep.wav",
  //         autoCancel: true,
  //       },
  //     ],
  //   });
  // };

  return (
    <CenterContainer>
      {/* <Button variant="contained" onClick={onHandleModal}>
        Ringing button
      </Button>
      <Button variant="contained" onClick={onStop}>
        Stop button
      </Button>
      {modal && (
        <FactoryDialog
          open={modal}
          onClose={onCloseDialog}
          modalData={{ data: "Hello World" }}
        />
      )} */}<Order/>
    </CenterContainer>
  );
};