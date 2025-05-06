import React from "react";
import { Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export const userColumns = (): GridColDef[] => {
  return [
    // { field: "fullName", headerName: "Fullname", flex: 1.5, minWidth: 250 },
    // { field: "userName", headerName: "User name", flex: 1.5, minWidth: 150 },
    // { field: "email", headerName: "Email", flex: 1.5, minWidth: 250 },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1.5,
      minWidth: 150,
      renderCell: (params) => {
        return (
          <>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                textTransform: "capitalize",
              }}
            >
              phone
            </Typography>
          </>
        ) as React.JSX.Element;
      },
    },
  ];
};
