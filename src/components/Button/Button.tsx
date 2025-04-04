import React from "react";
import { Button, CircularProgress, Typography } from "@mui/material";

interface ButtonCustomProps {
  text: string;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: object;
  sxText?: object;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  text,
  onClick,
  variant = "outlined",
  color = "primary",
  disabled = false,
  loading = false,
  fullWidth = false,
  startIcon,
  endIcon,
  sx,
  sxText,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      startIcon={!loading ? startIcon : null}
      endIcon={!loading ? endIcon : null}
      sx={{ textTransform: "none", ...sx }}
    >
      <Typography sx={{ ...sxText }}>
        {loading ? <CircularProgress size={20} color="inherit" /> : text}
      </Typography>
    </Button>
  );
};

export default ButtonCustom;
