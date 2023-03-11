import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { boolean } from "zod";
import { useUpdateOrderMutation } from "../../../store/slices/api";
import { UpdateOrderData } from "../../../types";
import { DeliveryEnum } from "../../../types/enum/enum";
import { acceptedStatus, pendingStatus } from "../../Order/Order";
import { OrderDialogProps } from "../Dialog";

const orderStatuses = [
  {
    status: "Pending",
    value: 0,
  },
  {
    status: "Completed",
    value: 1,
  },
  {
    status: "Rejected",
    value: 2,
  },
  {
    status: "Driver in business",
    value: 3,
  },
  {
    status: "Preparation Completed",
    value: 4,
  },
  {
    status: "Rejected by business",
    value: 5,
  },
  {
    status: "Canceled by Driver",
    value: 6,
  },
  {
    status: "Accepted by business",
    value: 7,
  },
  {
    status: "Accepted by driver",
    value: 8,
  },
  {
    status: "Pick up completed by driver",
    value: 9,
  },
  {
    status: "Pick up Failed by driver",
    value: 10,
  },
  {
    status: "Delivery completed by driver",
    value: 11,
  },
  {
    status: "Delivery Failed by driver",
    value: 12,
  },
  {
    status: "Preorder",
    value: 13,
  },
  {
    status: "order not ready",
    value: 14,
  },
  {
    status: "Pickup completed by customer",
    value: 15,
  },
  {
    status: "canceled by customer",
    value: 16,
  },
  {
    status: "Not picked by customer",
    value: 17,
  },
  {
    status: "Driver almost arrived to business",
    value: 18,
  },
  {
    status: "Driver almost arrived to customer",
    value: 19,
  },
  {
    status: "customer almost arrived to business",
    value: 20,
  },
  {
    status: "customer arrived to business",
    value: 21,
  },
  {
    status: "looking for driver",
    value: 22,
  },
  {
    status: "driver on way",
    value: 23,
  },
];
const StatusUponDeliveryType = (deliveryType: number) => {
  let completedOption: Array<Object> = [];
  switch (true) {
    case deliveryType === DeliveryEnum.DELIVERY:
      return (completedOption = [
        {
          status: "Delivery completed by driver",
          value: 11,
        },
      ]);
    case deliveryType === DeliveryEnum.PICK_UP:
      return (completedOption = [
        {
          status: "Preparation Completed",
          value: 4,
        },
      ]);
    case deliveryType === DeliveryEnum.EATIN:
      return (completedOption = [
        {
          status: "Completed",
          value: 1,
        },
      ]);
    case deliveryType === DeliveryEnum.DRIVER_THRU:
      return (completedOption = [
        {
          status: "Delivery completed by driver",
          value: 11,
        },
      ]);
    case deliveryType === DeliveryEnum.CURBSIDE:
      return (completedOption = [
        {
          status: "Delivery completed by driver",
          value: 11,
        },
      ]);

    default:
      return (completedOption = [
        {
          status: "Delivery completed by driver",
          value: 0,
        },
      ]);

  }
};
const OrderDialog = ({ modalData, onClose, open }: OrderDialogProps) => {
  const completedOptions = StatusUponDeliveryType(modalData.deliveryType)
  const [updateOrder, { isLoading: isUpdating }] = useUpdateOrderMutation();
  const [status, setStatus] = useState<number>(completedOptions[0].value);
  const handleOrderStatusChange = (event: SelectChangeEvent<typeof status>) => {
    setStatus(event.target.value as number);
  };
 
  const onUpdateOrder = async (newOrderData: UpdateOrderData) => {
   
    console.log(newOrderData)
    await updateOrder(newOrderData);
    onClose();
  };
  // console.log(modalData, "line 125");
  if (!modalData) {
    return (
      <Dialog open={open} fullWidth maxWidth={"sm"}>
        <LinearProgress color="secondary" />
      </Dialog>
    );
  }

  switch (true) {
    case acceptedStatus.includes(modalData.status):
      return (
        <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please select the status you want to change
            </DialogContentText>{" "}
            <Box
              noValidate
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                m: "auto",
                width: "fit-content",
              }}
            >
              <FormControl sx={{ mt: 2, minWidth: 120 }}>
                <InputLabel htmlFor="status">Status</InputLabel>

                <Select
                  autoFocus
                  variant="outlined"
                  onChange={handleOrderStatusChange}
                  value={status}
                  label="Status"
                  inputProps={{
                    name: "status",
                    id: "status",
                  }}
                  autoWidth
                >
                  {completedOptions.map((orderStatus, index: number) => {
                    return (
                      <MenuItem value={orderStatus.value} key={index}>
                        {orderStatus.status}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          {isUpdating ? (
            <LinearProgress color="secondary" />
          ) : (
            <DialogActions>
              <Button onClick={onClose}>Close</Button>
              <Button
                onClick={() =>
                  onUpdateOrder({
                    orderId: modalData.orderId,
                    orderStatus: status,
                  })
                }
              >
                Confirm
              </Button>
            </DialogActions>
          )}

          {/*  */}
        </Dialog>
      );
    default:
      return (
        <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
          <DialogTitle>Error</DialogTitle>
          <DialogContent>
            <DialogContentText>Something wrong happend</DialogContentText>{" "}
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Close</Button>
            <Button onClick={onClose}>Confirm</Button>
          </DialogActions>
          {/* <LinearProgress color="secondary" /> */}
        </Dialog>
      );
  }
};

export default OrderDialog;
