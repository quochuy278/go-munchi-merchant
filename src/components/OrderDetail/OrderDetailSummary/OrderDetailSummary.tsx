import { Box, Typography } from '@mui/material';
import React from 'react'
import { Summary } from '../../../types';
import styles from "./OrderDetailSummary.module.css";
interface FooterProps {
    summary: Summary;
  }
  

const OrderDetailSummary = ({ summary }: FooterProps) => {
  return (
    <Box className={styles.payment_content}>
      <Box sx={{ width: "100%" }}>
        <Box className={styles.payment_title}>
          <Box>
            <Typography
              fontSize="12px"
              lineHeight="16px"
              sx={{ color: "#51545E" }}
            >
              Tax
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize="12px"
              lineHeight="16px"
              sx={{ color: "#51545E" }}
            >
              {summary.tax} €
            </Typography>
          </Box>
        </Box>
        <Box className={styles.payment_title}>
          <Box display="flex" alignItems="flex-end">
            <Typography
              fontSize="12px"
              lineHeight="16px"
              sx={{ color: "#000000" }}
            >
              Total
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize="30px"
              lineHeight="39px"
              sx={{ color: "#000000" }}
            >
             {summary.total} €
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default OrderDetailSummary