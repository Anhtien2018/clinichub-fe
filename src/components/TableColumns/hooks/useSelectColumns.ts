import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";

export function useColumnVisibility(columns: GridColDef[]) {
  // Trả thẳng columns, không cần useMemo
  const allColumns = columns;

  const [visibleFields, setVisibleFields] = useState<string[]>(
    allColumns.map((col) => col.field)
  );

  // Tính trực tiếp mỗi lần render — chỉ nên làm nếu columns ít hoặc performance không quan trọng
  const visibleColumns = allColumns.filter((col) =>
    visibleFields.includes(col.field)
  );

  return {
    allColumns,
    visibleFields,
    setVisibleFields,
    visibleColumns,
  };
}
