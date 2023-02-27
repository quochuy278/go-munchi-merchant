import CenterContainer from "../components/Container/CenterContainer";
import { useAppSelector } from "../store/hooks";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { selectSession, set as setSessionState } from "../store/slices/session";
import { Button } from "@mui/material";
import { LocalNotifications } from "@capacitor/local-notifications";
import { useState } from "react";
import Modal from "../components/Dialog/Dialog";
import FactoryDialog from "../components/Dialog/Dialog";
import useSound from "use-sound";
import music from "../assets/sounds/song.mp3";
import {  io } from "socket.io-client";
import useWebSocket, { ReadyState, useSocketIO } from "react-use-websocket";

export const HomePage = () => {
  const [socketUrl, setSocketUrl] = useState("http://localhost:5000/");
  const { sendMessage, lastMessage, readyState } = useSocketIO("http://localhost:5000/", {share:true}, true);
  console.log(lastMessage, readyState)
  // const socket = io("http://localhost:5000/");
  // socket.on('connect', (socket) => {
  //   socket.emit('join', room)
  // })

  // socket.on("newOrder", (socket) => {
  //   if (socket) {
  //     console.log(socket, "line 17");
  //     onHandleModal();
  //   }
  // });
  //join()
  const [modal, setModal] = useState<boolean>(false);
  // const { businessId } = useAppSelector(selectSession);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playBoop, { stop, pause }] = useSound(music, {
    volume: 1,
    interrupt: false,
    onplay: () => setIsPlaying(true),
    loop: true,
  });
  const onCloseDialog = () => {
    setModal(false);
    pause();
  };
  const onStop = () => {
    setModal(false);
    setIsPlaying(false);
    stop();
    // audio.pause();
    // audio.currentTime = 0;
  };
  const onHandleModal = () => {
    // audio.loop = true;
    // audio.play();
    setModal(true);
    setIsPlaying(true);
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

  //showmodel
  return (
    <CenterContainer>
      <Button variant="contained" onClick={onHandleModal}>
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
      )}
    </CenterContainer>
  );
};
