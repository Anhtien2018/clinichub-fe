import { textPrimary } from "@/common/color";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { PropagateLoader } from "react-spinners";

interface ButtonCustomProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: object;
  sxText?: object;
  sxIcon?: object;
  size?: string;
  type?: "button" | "submit" | "reset";
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  text,
  icon = "",
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
  size = "10",
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
        border: `1px solid ${textPrimary}`,
        textTransform: "none",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        ...sx,
      }}
    >
      {loading ? (
        <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
          <PropagateLoader color="#ffffff" size={size} />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: icon !== "" ? "5px" : "0px",
          }}
        >
          {icon && icon}
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: textPrimary,
              fontWeight: 600,
              ...sxText,
            }}
          >
            {text}
          </Typography>
        </Box>
      )}
    </Button>
  );
};

export default ButtonCustom;
