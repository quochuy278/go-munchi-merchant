import { Box } from "@mui/system";
import React from "react";
import CenterContainer from "../Container/CenterContainer";
import FullscreenLoading from "../Loading/FullscreenLoading";
import BusinessItem from "./BusinessItem";
import styles from "./businesslist.module.css";
const BusinessList = ({ data }: any) => {
  if (!data) {
    return <CenterContainer>Something happend</CenterContainer>;
  }
  return (
    <Box className={styles.business__list}>
      {data.map((business: any) => {
        return (
          <Box className={styles.business__item} key={business.publicId}>
            <BusinessItem data={business} />
          </Box>
        );
      })}
    </Box>
  );
};

export default BusinessList;
