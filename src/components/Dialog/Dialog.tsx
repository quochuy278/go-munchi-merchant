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
import BusinessDialog from "./BusinessDialog/BusinessDialog";
import styles from "./dialog.module.css";
import OrderDialog from "./OrderDialog/OrderDialog";

interface OrderDialogData {
  deliveryType: number;
  status: number;
  orderId: number;
  newPrepTime?: number | string;
}
interface BusinessDialogData {
  name: string;
  publicId: string;
}

interface DialogProps {
  open: boolean;
  children?: JSX.Element | JSX.Element[];
  isOrder?: boolean;
  isBusiness?: boolean;
  modalData?: OrderDialogData | BusinessDialogData;
  onClose: () => void;
}

export interface OrderDialogProps extends DialogProps {
  modalData?: any;
  onClose: () => void;
}

export interface BusinessDialogProps extends DialogProps {
  modalData: any;
  onClose: () => void;
}

const FactoryDialog = ({
  open,
  onClose,
  modalData,
  isOrder,
  isBusiness,
}: DialogProps) => {
  if (!modalData) {
    return <p>No data</p>;
  }
  switch (true) {
    case isOrder:
      return (
        <OrderDialog open={open} onClose={onClose} modalData={modalData} />
      );
    case isBusiness:
      return (
        <BusinessDialog open={open} onClose={onClose} modalData={modalData} />
      );
    default:
      return (
        <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
          <DialogTitle>Something wrong happened</DialogTitle>
          <DialogContent>Please reset the page or login again</DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Close</Button>
          </DialogActions>
          <LinearProgress color="secondary" />
        </Dialog>
      );
  }
};

export default FactoryDialog;
