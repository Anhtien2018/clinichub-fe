import { usePatientsStore } from "@/stores/Patients/usePatientsStore";
import { FieldInput } from "../Field";
import React, { useEffect, useRef, useState } from "react";

export const KeywordInput = React.memo(() => {
  const setKeyword = usePatientsStore((state) => state.setKeyword);
  const keywordRef = useRef(usePatientsStore.getState().keyWord);
  const [localKeyword, setLocalKeyword] = useState(keywordRef.current);

  useEffect(() => {
    const timer = setTimeout(() => {
      setKeyword(localKeyword);
    }, 300); // debounce

    return () => clearTimeout(timer);
  }, [localKeyword]);

  return (
    <FieldInput
      sx={{ borderRadius: "8px" }}
      size="small"
      value={localKeyword}
      onChange={(e) => {
        setLocalKeyword(e.target.value as string);
      }}
      placeholder="Search..."
      label=""
      name=""
      isError={false}
    />
  );
});
