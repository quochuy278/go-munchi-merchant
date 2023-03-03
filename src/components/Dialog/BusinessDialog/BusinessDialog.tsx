import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress,
} from "@mui/material";

import FullscreenLoading from "../../Loading/FullscreenLoading";
import DialogContentText from "@mui/material/DialogContentText";
import { addSessionState } from "../../../utils/preference";
import { setBussinessId } from "../../../store/slices/session";
import { useAppDispatch } from "../../../store/hooks";
import { BusinessDialogProps } from "../Dialog";
const BusinessDialog = ({ modalData, onClose, open }: BusinessDialogProps) => {
  // console.log(modalData)
  const dispatch = useAppDispatch();
  const onConfirm = async () => {
    const businessState = { businessId: modalData.publicId };
    await addSessionState(businessState);
    dispatch(setBussinessId(businessState.businessId));
    onClose();
  };
  if (!modalData) {
    return (
      <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
        <LinearProgress color="secondary" />
      </Dialog>
    );
  }
  return (
    <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
      <DialogTitle>Confirmatiom</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Please confirm the business you select
        </DialogContentText>
        <DialogContentText>You have select: {modalData.name}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={onConfirm}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BusinessDialog;
