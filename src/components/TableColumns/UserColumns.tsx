import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import { renderCenterCell } from "../Cell/RenderCell";
import { formatDateTime } from "@/common/helper";
import DropDownActionTable from "../DropDown/DropDownActionTable";

export const userColumns = (): GridColDef[] => {
  return [
    {
      field: "index",
      headerName: "Stt",
      flex: 1.5,
      minWidth: 50,
      headerClassName: "custom-header",
      renderCell: (params) =>
        renderCenterCell(
          (
            params.api.getRowIndexRelativeToVisibleRows(params.id) + 1
          ).toString()
        ),
    },
    {
      field: "fullName",
      headerName: "Họ tên",
      flex: 1.5,
      minWidth: 250,
      headerClassName: "custom-header",
      renderCell: (params) => renderCenterCell(params.row.fullName),
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.5,
      minWidth: 300,
      headerClassName: "custom-header",
      renderCell: (params) => renderCenterCell(params.row.email),
    },
    {
      field: "fullPhoneNumber",
      headerName: "Số điện thoại",
      flex: 1.5,
      minWidth: 200,
      headerClassName: "custom-header",
      renderCell: (params) => renderCenterCell(params.row.fullPhoneNumber),
    },
    {
      field: "gender",
      headerName: "Giới tính",
      flex: 1.5,
      minWidth: 100,
      headerClassName: "custom-header",
      renderCell: (params) =>
        renderCenterCell(params.row.gender === "FEMALE" ? "Nữ" : "Nam"),
    },
    {
      field: "dateOfBirth",
      headerName: "Ngày sinh",
      flex: 1.5,
      minWidth: 150,
      headerClassName: "custom-header",
      renderCell: (params) =>
        renderCenterCell(formatDateTime(params.row.dateOfBirth)),
    },
    {
      field: "address",
      headerName: "Địa chỉ",
      flex: 1.5,
      minWidth: 350,
      headerClassName: "custom-header",
      renderCell: (params) => renderCenterCell(params.row.address),
    },

    {
      field: "createdAt",
      headerName: "Ngày tạo",
      flex: 1.5,
      minWidth: 250,
      headerClassName: "custom-header",
      renderCell: (params) =>
        renderCenterCell(formatDateTime(params.row.createdAt, true)),
    },
    {
      field: "Action",
      headerName: "Thao tác",
      flex: 1.5,
      minWidth: 100,
      headerClassName: "custom-header",
      renderCell: () => <DropDownActionTable />,
    },
  ];
};
