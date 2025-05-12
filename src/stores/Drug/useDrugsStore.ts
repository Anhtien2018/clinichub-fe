import { Drug } from "@/graphql/type.interface";
import { create } from "zustand";

interface DrugsStore {
  keyWord: string;
  page: number;
  perPage: number;
  listDrugs: Drug[];
  openedEdit: boolean;
  idDrugs: string;
  totalItems: number;
  listIds: string[];
}

interface Action {
  setListDrugs: (listDrugs: DrugsStore["listDrugs"]) => void;
  setKeyword: (keyWord: DrugsStore["keyWord"]) => void;
  setPage: (page: DrugsStore["page"]) => void;
  setPerPage: (perPage: DrugsStore["perPage"]) => void;
  setOpenEdit: (openedEdit: DrugsStore["openedEdit"]) => void;
  setIdDrugs: (idDrugs: DrugsStore["idDrugs"]) => void;
  setTotalItems: (totalItems: DrugsStore["totalItems"]) => void;
  setListIds: (listIds: DrugsStore["listIds"]) => void;
}

export const useDrugsStore = create<DrugsStore & Action>()((set) => ({
  listDrugs: [],
  setListDrugs: (listDrugs) => {
    set(() => ({ listDrugs }));
  },
  keyWord: "",
  setKeyword: (keyWord) => {
    set(() => ({ keyWord }));
  },
  page: 1,
  setPage: (page) => {
    set(() => ({ page }));
  },
  perPage: 25,
  setPerPage: (perPage) => {
    set(() => ({ perPage }));
  },
  openedEdit: false,
  setOpenEdit: (openedEdit) => {
    set(() => ({ openedEdit }));
  },
  idDrugs: "",
  setIdDrugs: (idDrugs) => {
    set(() => ({ idDrugs }));
  },
  totalItems: 0,
  setTotalItems: (totalItems) => {
    set(() => ({ totalItems }));
  },
  listIds: [],
  setListIds: (listIds) => {
    set(() => ({ listIds }));
  },
}));
