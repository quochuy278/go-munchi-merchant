import { Alert } from "@mui/material";


interface NotificationProps {
    message: string
}

const Notification= ( props: NotificationProps) => {
  return (
    <>
      <Alert severity="error">{props.message}</Alert>
    </>
  );
}

export default Notification;