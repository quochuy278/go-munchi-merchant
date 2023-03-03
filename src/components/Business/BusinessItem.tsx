import { Card, CardActionArea, CardHeader } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import FactoryDialog from "../Dialog/Dialog";
const BusinessItem = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  const onOpen = async () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  // console.log(open)
  return (
    <Card
      sx={{
        backgroundColor: "#696969",
        boxShadow: "10px 5px 5px #F8F8F8",
        ":active": {
          backgroundColor: "#888888",
        },
        color: "white",
      }}
    >
      <CardActionArea
        sx={{
          "&:focus": {
            backgroundColor: "red",
          },
        }}
        onClick={onOpen}
      >
        <CardHeader title={data.name} />
      </CardActionArea>
      <FactoryDialog
        onClose={onClose}
        open={open}
        isBusiness={true}
        modalData={{
          name: data.name,
          publicId: data.publicId,
        }}
      />
    </Card>
  );
};
export default BusinessItem;
