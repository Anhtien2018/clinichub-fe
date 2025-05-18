"use client";

import { FieldInput } from "../Field";
import React from "react";
import { Box } from "@mui/material";
// import { usePatientsStore } from "@/stores/Patients/usePatientsStore";

interface SearchTableProps {
  setKeywordLocal: (keyWordLocal: string) => void;
  keyWordLocal: string;
}

export default function SearchTable({
  keyWordLocal,
  setKeywordLocal,
}: SearchTableProps): React.JSX.Element {
  // const { setKeyword } = usePatientsStore();
  return (
    <Box>
      <FieldInput
        sx={{ borderRadius: "8px" }}
        size="small"
        value={keyWordLocal}
        onChange={(e) => {
          setKeywordLocal(e.target.value as string);
        }}
        placeholder="Nhập từ khóa tìm kiếm..."
        label=""
        name="search"
        onBlur={() => {
          // setKeyword(keyWordLocal);
        }}
        isError={false}
      />
    </Box>
  );
}
