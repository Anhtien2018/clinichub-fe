"use client";

import { DrugsColumns } from "@/components/TableColumns/DrugsColumns";
import { useDrugsLazyQuery } from "@/graphql/queries/drugs.generated";
import { Drug } from "@/graphql/type.interface";
import { useDrugsStore } from "@/stores/Drug/useDrugsStore";
import { useEffect, useState } from "react";

export const useDrugs = () => {
  const {
    listIds,
    setIdDrugs,
    setOpenEdit,
    setListDrugs,
    totalItems,
    setTotalItems,
    page,
    setPage,
    perPage,
    setPerPage,
    keyWord,
    listDrugs,
    setListIds,
  } = useDrugsStore();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [getDrugs, { loading: loadingGetDrugs }] = useDrugsLazyQuery({
    onCompleted(data) {
      if (data.drugs) {
        setListDrugs(data.drugs.items as Drug[]);
        setTotalItems(data.drugs.pageInfo.total);
      }
    },
    onError(error) {
      console.log(error);
    },
  });

  useEffect(() => {
    void getDrugs({
      variables: {
        filter: {
          limit: perPage,
          page,
          search: keyWord,
        },
      },
    });
  }, [page, perPage, keyWord]);

  const columns = DrugsColumns({
    handleDelete(id) {
      setIdDrugs(id);
      setOpenDialog(true);
    },
    handleEdit(id) {
      setIdDrugs(id);
      setOpenEdit(true);
    },
  });

  return {
    listIds,
    columns,
    openDialog,
    setOpenDialog,
    page,
    setPage,
    perPage,
    setPerPage,
    totalItems,
    listDrugs,
    loadingGetDrugs,
    setListIds,
  };
};
