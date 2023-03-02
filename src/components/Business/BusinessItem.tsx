import { Card, CardActionArea, CardHeader } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { setBussinessId } from "../../store/slices/session";
import { addSessionState } from "../../utils/preference";

const BusinessItem = ({ data }: any) => {
  const dispatch = useAppDispatch();
  const handleSetBusiness = async () => {
    const businessState = { businessId: data.publicId };
    await addSessionState(businessState);
    dispatch(setBussinessId(businessState.businessId));
  };
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
      onClick={handleSetBusiness}
    >
      <CardActionArea
        sx={{
          "&:focus": {
            backgroundColor: "red",
          },
        }}
      >
        <CardHeader title={data.name} />
      </CardActionArea>
    </Card>
  );
};
export default BusinessItem;
