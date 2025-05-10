import { Patient } from "@/graphql/type.interface";
import { create } from "zustand";

interface PatientsStore {
  keyWord: string;
  page: number;
  perPage: number;
  listPatients: Patient[];
}

interface Action {
  setListPatients: (listPatients: PatientsStore["listPatients"]) => void;
  setKeyword: (keyWord: PatientsStore["keyWord"]) => void;
  setPage: (page: PatientsStore["page"]) => void;
  setPerPage: (perPage: PatientsStore["perPage"]) => void;
}

export const usePatientsStore = create<PatientsStore & Action>()((set) => ({
  listPatients: [],
  setListPatients: (listPatients) => {
    set(() => ({ listPatients }));
  },
  keyWord: "",
  setKeyword: (keyWord) => {
    set(() => ({ keyWord }));
  },
  page: 1,
  setPage: (page) => {
    set(() => ({ page }));
  },
  perPage: 10,
  setPerPage: (perPage) => {
    set(() => ({ perPage }));
  },
}));
