import { GridColDef } from "@mui/x-data-grid";
import { renderCenterCell } from "../Cell/RenderCell";
import { formatCurrencyVND, formatDateTime } from "@/common/helper";
import { Box } from "@mui/material";
import DropDownActionTable from "../DropDown/DropDownActionTable";

interface PatientsColumnsProps {
  handleEdit?: (id: string) => void;
  handleDelete?: (id: string) => void;
}
export const DrugsColumns = ({
  handleDelete,
  handleEdit,
}: PatientsColumnsProps): GridColDef[] => [
  {
    field: "index",
    headerName: "STT",
    flex: 1,
    minWidth: 50,
    headerClassName: "custom-header",

    renderCell: (params) =>
      renderCenterCell(
        (params.api.getRowIndexRelativeToVisibleRows(params.id) + 1).toString()
      ),
  },
  {
    field: "code",
    headerName: "Mã thuốc",
    flex: 1.5,
    minWidth: 150,
    resizable: true,
    headerClassName: "custom-header",
    renderCell: (params) => renderCenterCell(params.row.code),
  },
  {
    field: "name",
    headerName: "Tên thuốc",
    flex: 2,
    minWidth: 200,
    headerClassName: "custom-header",
    renderCell: (params) => renderCenterCell(params.row.name),
  },
  {
    field: "ingredient",
    headerName: "Hoạt chất",
    flex: 2,
    minWidth: 200,
    headerClassName: "custom-header",
    renderCell: (params) => renderCenterCell(params.row.ingredient || "-"),
  },
  {
    field: "quantity",
    headerName: "Tổng SL ",
    flex: 1.5,
    minWidth: 150,
    headerClassName: "custom-header",
    renderCell: (params) => renderCenterCell(params.row.quantity),
  },
  {
    field: "stockDisplay",
    headerName: "Tồn kho hiển thị",
    flex: 2,
    minWidth: 180,
    headerClassName: "custom-header",
    renderCell: (params) => renderCenterCell(params.row.stockDisplay),
  },
  {
    field: "baseUnitName",
    headerName: "Đơn vị cơ bản",
    flex: 1.5,
    minWidth: 120,
    headerClassName: "custom-header",
    renderCell: (params) => renderCenterCell(params.row.baseUnitName),
  },
  {
    field: "packageQuantity",
    headerName: "Số gói",
    flex: 1.2,
    minWidth: 100,
    headerClassName: "custom-header",
    renderCell: (params) => renderCenterCell(params.row.packageQuantity),
  },
  {
    field: "conversionRate",
    headerName: "Tỉ lệ chuyển đổi",
    flex: 1.2,
    minWidth: 120,
    headerClassName: "custom-header",
    renderCell: (params) =>
      renderCenterCell(
        `1 ${params.row.packageUnit} = ${params.row.conversionRate} ${params.row.baseUnitName}`
      ),
  },
  {
    field: "price",
    headerName: "Giá bán (VNĐ)",
    flex: 1.5,
    minWidth: 120,
    headerClassName: "custom-header",
    renderCell: (params) =>
      renderCenterCell(formatCurrencyVND(params.row.price)),
  },
  {
    field: "costPrice",
    headerName: "Giá nhập (VNĐ)",
    flex: 1.5,
    minWidth: 120,
    headerClassName: "custom-header",
    renderCell: (params) =>
      renderCenterCell(formatCurrencyVND(params.row.costPrice || 0)),
  },
  {
    field: "createdAt",
    headerName: "Ngày tạo",
    flex: 1.5,
    minWidth: 150,
    headerClassName: "custom-header",
    renderCell: (params) =>
      renderCenterCell(formatDateTime(params.row.createdAt)),
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
