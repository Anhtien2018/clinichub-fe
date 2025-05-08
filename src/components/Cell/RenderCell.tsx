import { Box, Typography } from "@mui/material";

export const renderCenterCell = (value: string) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      height: "100%",
    }}
  >
    <Typography
      sx={{
        color: "text.primary",
        fontSize: "0.95rem",
        fontWeight: 500,
        textTransform: "capitalize",
      }}
    >
      {value ?? ""}
    </Typography>
  </Box>
);
