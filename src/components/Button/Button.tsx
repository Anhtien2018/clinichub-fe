import React from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { PropagateLoader } from "react-spinners";

interface ButtonCustomProps {
  text: string;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: object;
  sxText?: object;
  type?: "button" | "submit" | "reset";
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  text,
  onClick,
  variant = "outlined",
  disabled = false,
  loading = false,
  fullWidth = false,
  startIcon,
  type = "button",
  endIcon,
  sx,
  sxText,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant={variant}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      startIcon={!loading ? startIcon : null}
      endIcon={!loading ? endIcon : null}
      sx={{
        "&:hover": { opacity: 0.8 },
        border: "none",
        textTransform: "none",
        display: "flex",
        alignItems: "center",
        ...sx,
      }}
    >
      {loading ? (
        <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
          <PropagateLoader color="#ffffff" size="10" />
        </Box>
      ) : (
        <Typography sx={{ ...sxText, display: "flex", alignItems: "center" }}>
          {text}
        </Typography>
      )}
    </Button>
  );
};

export default ButtonCustom;
