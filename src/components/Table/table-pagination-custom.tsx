import { Theme, SxProps } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import TablePagination, {
  TablePaginationProps,
} from "@mui/material/TablePagination";

// ----------------------------------------------------------------------

type Props = {
  dense?: boolean;
  onChangeDense?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
};

export default function TablePaginationCustom({
  dense,
  onChangeDense,
  rowsPerPageOptions = [25, 50, 100],
  sx,
  ...other
}: Props & TablePaginationProps) {
  return (
    <Box sx={{ position: "relative", ...sx }}>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        {...other}
        sx={{
          borderTopColor: "transparent",
        }}
        labelRowsPerPage="Số hàng mỗi trang" // Đổi nhãn
        labelDisplayedRows={({ from, to, count }) =>
          `Hiển thị ${from}-${to} trong tổng số ${count} bản ghi`
        }
      />

      {onChangeDense && (
        <FormControlLabel
          label="Chế độ gọn" // Đổi nhãn
          control={<Switch checked={dense} onChange={onChangeDense} />}
          sx={{
            pl: 2,
            py: 1.5,
            top: 0,
            position: {
              sm: "absolute",
            },
          }}
        />
      )}
    </Box>
  );
}
