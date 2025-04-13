import React from "react";
import { Button, CircularProgress, Typography } from "@mui/material";

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
        ...sx,
      }}
    >
      <Typography sx={{ ...sxText }}>
        {loading ? <CircularProgress size={20} color="inherit" /> : text}
      </Typography>
    </Button>
  );
};

export default ButtonCustom;
