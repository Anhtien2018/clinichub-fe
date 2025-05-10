import { useState } from "react";
//
import { TableProps } from "./types";

// ----------------------------------------------------------------------

type ReturnType = TableProps;

export type UseTableProps = {
  defaultDense?: boolean;
  defaultOrder?: "asc" | "desc";
  defaultOrderBy?: string;
  defaultSelected?: string[];
  defaultRowsPerPage?: number;
  defaultCurrentPage?: number;
};

export default function useTable(props?: UseTableProps): ReturnType {
  const [dense, setDense] = useState(!!props?.defaultDense);

  const [page, setPage] = useState(props?.defaultCurrentPage || 0);

  const [orderBy, setOrderBy] = useState(props?.defaultOrderBy || "name");

  const [rowsPerPage, setRowsPerPage] = useState(
    props?.defaultRowsPerPage || 5
  );

  const [order, setOrder] = useState<"asc" | "desc">(
    props?.defaultOrder || "asc"
  );

  const [selected, setSelected] = useState<string[]>(
    props?.defaultSelected || []
  );

  const onSort = (id: string) => {
    const isAsc = orderBy === id && order === "asc";
    if (id !== "") {
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(id);
    }
  };

  const onSelectRow = (inputValue: string) => {
    const newSelected = selected.includes(inputValue)
      ? selected.filter((value) => value !== inputValue)
      : [...selected, inputValue];

    setSelected(newSelected);
  };

  const onChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const onChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const onSelectAllRows = (checked: boolean, inputValue: string[]) => {
    if (checked) {
      setSelected(inputValue);
      return;
    }
    setSelected([]);
  };

  const onChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const onResetPage = () => {
    setPage(0);
  };

  const onUpdatePageDeleteRow = (totalRowsInPage: number) => {
    setSelected([]);
    if (page) {
      if (totalRowsInPage < 2) {
        setPage(page - 1);
      }
    }
  };

  const onUpdatePageDeleteRows = ({
    totalRows,
    totalRowsInPage,
    totalRowsFiltered,
  }: {
    totalRows: number;
    totalRowsInPage: number;
    totalRowsFiltered: number;
  }) => {
    const totalSelected = selected.length;

    setSelected([]);

    if (page) {
      if (totalSelected === totalRowsInPage) {
        setPage(page - 1);
      } else if (totalSelected === totalRowsFiltered) {
        setPage(0);
      } else if (totalSelected > totalRowsInPage) {
        const newPage =
          Math.ceil((totalRows - totalSelected) / rowsPerPage) - 1;
        setPage(newPage);
      }
    }
  };

  return {
    dense,
    order,
    page,
    orderBy,
    rowsPerPage,
    //
    selected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangePage,
    onChangeDense,
    onResetPage,
    onChangeRowsPerPage,
    onUpdatePageDeleteRow,
    onUpdatePageDeleteRows,
    //
    setPage,
    setDense,
    setOrder,
    setOrderBy,
    setSelected,
    setRowsPerPage,
  };
}
