import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BusinessList from "../../components/Business/BusinessList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useGetBusinessQuery } from "../../store/slices/api";
import { selectSession } from "../../store/slices/session";
import styles from "./BusinessPage.module.css";

const BusinessPage = () => {
  const { businessId, publicUserId } = useAppSelector(selectSession);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data, isFetching, isLoading, error, isError } =
    useGetBusinessQuery(publicUserId);
  useEffect(() => {
    // Update the document title using the browser API
    if (businessId) {
      navigate("/", { replace: true });
    }
  }, [businessId, navigate]);
  if (isLoading || isFetching) {
    return <h1>Loading in Business...</h1>;
  }
  console.log(data);

  return (
    <Box className={styles.container}>
      <Box className={styles.business__title}>
        <Typography variant="h4"> Select your business</Typography>
      </Box>
      <Box className={styles.business__list}>
        <BusinessList data={data} />
      </Box>
    </Box>
  );
};

export default BusinessPage;
