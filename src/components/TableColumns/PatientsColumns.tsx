import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import { renderCenterCell } from "../Cell/RenderCell";
import { formatDateTime, generateGenderVi } from "@/common/helper";
import DropDownActionTable from "../DropDown/DropDownActionTable";
import { Box } from "@mui/material";

interface PatientsColumnsProps {
  handleEdit?: (id: string) => void;
  handleDelete?: (id: string) => void;
}

export const patientsColumns = ({
  handleEdit,
  handleDelete,
}: PatientsColumnsProps): GridColDef[] => {
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
      minWidth: 150,
      headerClassName: "custom-header",
      renderCell: (params) =>
        renderCenterCell(generateGenderVi(params.row.gender)),
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
      minWidth: 400,
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
      renderCell: (params) => (
        <Box onClick={(e) => e.stopPropagation()}>
          <DropDownActionTable
            id={params.row.id}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </Box>
      ),
    },
  ];
};
