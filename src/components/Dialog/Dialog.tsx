import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress,
} from "@mui/material";
import React from "react";
import styles from "./dialog.module.css";

interface DialogData {
  data: any;
}

interface DialogProps {
  children?: JSX.Element | JSX.Element[];
  open: boolean;
  modalData: DialogData;
  onClose: () => void;
}

const FactoryDialog = ({ open, onClose, modalData }: DialogProps) => {
  return (
    <Dialog open={true} fullWidth={true} maxWidth={"sm"}>
      <DialogTitle>Dialog testing</DialogTitle>
      <DialogContent>{modalData.data}</DialogContent>
      <DialogActions>
    
        <Button onClick={onClose}>Close</Button>
       
      </DialogActions>
      <LinearProgress color="secondary" />
    </Dialog>
  );
};

export default FactoryDialog;
