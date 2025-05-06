// @mui
import { Theme, SxProps } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import EmptyContent from "../empty-content";
import { Table, TableBody } from "@mui/material";

// ----------------------------------------------------------------------

type Props = {
  notFound: boolean;
  sx?: SxProps<Theme>;
};

export default function TableNoData({ notFound, sx }: Props) {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell colSpan={12}>
            <EmptyContent
              filled
              title="No Data"
              sx={{
                py: 10, // Điều chỉnh khoảng cách theo nhu cầu
                ...sx,
              }}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
