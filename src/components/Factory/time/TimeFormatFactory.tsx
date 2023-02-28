import { Box, Typography } from "@mui/material";

interface FactoryTimeFormatProps {
  minutes: number;
  seconds: number;
  isDanger: boolean;
}

export const TimeFormatFactory = ({
  minutes,
  seconds,
  isDanger,
}: FactoryTimeFormatProps) => {
  switch (true) {
    case seconds < 10 && !isDanger:
      return (
        <Box
          sx={{
            width: "25%",
            height: "50px",
            backgroundColor: "#F1F6ED",
          }}
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          marginRight={2}
          borderRadius="8px"
        >
          <Typography
            sx={{ color: "#74A047" }}
            fontSize="20px"
            lineHeight="26px"
            component={"div"}
          >
            {minutes}: 0{seconds}
          </Typography>
        </Box>
      );

    case seconds < 10 && isDanger:
      return (
        <Box
          sx={{
            width: "25%",
            height: "50px",
            backgroundColor: "#FDF4F3",
          }}
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          marginRight={2}
          borderRadius="8px"
        >
          <Typography
            sx={{ color: "#FF5F5F" }}
            fontSize="20px"
            lineHeight="26px"
            component={"div"}
          >
            {minutes}: 0{seconds}
          </Typography>
        </Box>
      );
    case isDanger:
      return (
        <Box
          sx={{
            width: "25%",
            height: "50px",
            backgroundColor: "#FDF4F3",
          }}
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          marginRight={2}
          borderRadius="8px"
        >
          <Typography
            sx={{ color: "#FF5F5F" }}
            fontSize="20px"
            lineHeight="26px"
            component={"div"}
          >
            {minutes}:{seconds}
          </Typography>
        </Box>
      );
    case null:
      return null;
    default:
      return (
        <Box
          sx={{
            width: "25%",
            height: "50px",
            backgroundColor: "#F1F6ED",
          }}
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          marginRight={2}
          borderRadius="8px"
        >
          <Typography
            sx={{ color: "#74A047" }}
            fontSize="20px"
            lineHeight="26px"
            component={"div"}
          >
            {minutes}:{seconds}
          </Typography>
        </Box>
      );
  }
};
