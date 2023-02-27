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

export const HomePage = () => {
  const [modal, setModal] = useState<boolean>(false);
  // const { businessId } = useAppSelector(selectSession);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playBoop, { stop, pause }] = useSound(music, {
    volume: 0.25,
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
  });
  const onCloseDialog = () => {
    setModal(false);
    pause();
  };
  console.log("This is home page");
  const onHandleModal = () => {
    setModal(true);
    setIsPlaying(true);
    playBoop();
  };
  const onHandleClick = async (event: any) => {
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: "Tesing from Huy",
          body: "tesing this shitty functionality",
          sound: "beep.wav",
          autoCancel: true,
        },
      ],
    });
  };

  //showmodel
  return (
    <CenterContainer>
      <Button variant="contained" onClick={onHandleModal}>
        Ringing button
      </Button>
      <Button variant="contained">Stop button</Button>
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
