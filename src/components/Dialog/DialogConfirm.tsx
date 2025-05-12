import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { ButtonCustom } from "../Button";

interface DialogConfirmProps {
  text?: string;
  open: boolean;
  title?: string;
  setOpen: (open: boolean) => void;
  onDelete?: () => void;
  textAction?: string;
  loading?: boolean;
}

export default function DialogConfirm({
  text = "",
  title = "",
  setOpen,
  open,
  onDelete,
  textAction,
  loading = false,
}: DialogConfirmProps): React.ReactElement {
  return (
    <Dialog open={open}>
      {!!title && (
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                backgroundColor: "#fef2f2",
                color: "#ef4444",
                borderRadius: "50%",
                padding: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 2,
              }}
            >
              <WarningAmberRoundedIcon />
            </Box>
            <Typography sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
              {title}
            </Typography>
          </Box>
        </DialogTitle>
      )}

      {!!text && (
        <DialogContent>
          <Typography sx={{ fontSize: "0.875rem" }}>{text}</Typography>
        </DialogContent>
      )}

      <DialogActions>
        <ButtonCustom
          onClick={() => {
            setOpen(false);
          }}
          variant="outlined"
          text="Hủy"
          sx={{
            height: "40px",
          }}
        />
        <ButtonCustom
          disabled={loading}
          loading={loading}
          onClick={onDelete}
          sx={{
            background: "#ef4444",
            border: "none",
            fontWeight: 600,
            width: "130px",
            height: "40px",
          }}
          sxText={{ color: "#fff" }}
          text={textAction ?? ""}
        />
      </DialogActions>
    </Dialog>
  );
}
