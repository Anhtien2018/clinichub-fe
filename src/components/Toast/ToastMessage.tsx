import React from "react";
// import { brand, errorColor, gray, successColor } from "@/common/colors";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DeliveryDiningRoundedIcon from "@mui/icons-material/DeliveryDiningRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import NewReleasesRoundedIcon from "@mui/icons-material/NewReleasesRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { Box, SxProps, Typography } from "@mui/material";
import { errorColor, successColor } from "@/common/color";

const iconsColor: Record<string, string> = {
  success: successColor,
  error: errorColor,
  // info: gray[500],
  warning: "orange",
};
const icons: Record<string, React.ElementType> = {
  success: CheckCircleRoundedIcon,
  error: NewReleasesRoundedIcon,
  info: InfoRoundedIcon,
  warning: WarningRoundedIcon,
  newOrder: DeliveryDiningRoundedIcon,
};

export const ToastMessage = (
  type: "success" | "error" | "info" | "newOrder" | "warning",
  message: string,
  navigate?: () => void
): void => {
  toast(<ToastContent message={message} status={type} />, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "light",
    style: {
      backgroundColor: "white",
      color: "black",
      padding: "6px 12px",
      boxShadow:
        "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    },
    onClick: () => {
      if (navigate) {
        navigate(); // Gọi hàm navigate
      }
    },
  });
};

function ToastContent({
  message,
  status,
}: {
  message: string;
  status: string;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <ToastIcon
        status={status}
        sx={{ color: iconsColor[status], width: "24px", height: "24px" }}
      />
      <Typography fontSize={15} fontWeight={500} color={"#000"}>
        {message}
      </Typography>
    </Box>
  );
}

export default function ToastContainerComponent(): React.JSX.Element {
  return (
    <ToastContainer
      stacked
      pauseOnHover
      autoClose={5000}
      newestOnTop={false}
      // hideProgressBar={false}
      closeButton={CustomCloseButton}
      closeOnClick={false}
      pauseOnFocusLoss
      draggable
      position="top-right"
      style={{ zIndex: 9999999 }}
    />
  );
}

const CustomCloseButton = ({ closeToast }: { closeToast?: () => void }) => (
  <CloseRoundedIcon
    onClick={() => closeToast?.()}
    sx={{
      width: 16,
      height: 16,
      color: "white",
      cursor: "pointer",
      position: "absolute",
      top: "6px",
      right: "6px",
    }}
  />
);

interface ToastIconProps {
  status: string;
  sx?: SxProps;
}

export function ToastIcon({ status, sx }: ToastIconProps): React.JSX.Element {
  const IconComponent = icons[status] || CheckCircleRoundedIcon;
  return <IconComponent sx={{ ...sx }} />;
}
