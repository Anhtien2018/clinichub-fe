import { Patient } from "@/graphql/type.interface";
import { create } from "zustand";

interface PatientsStore {
  keyWord: string;
  page: number;
  perPage: number;
  listPatients: Patient[];
  openedEdit: boolean;
  idPatient: string;
  totalItems: number;
  listIds: string[];
}

interface Action {
  setListPatients: (listPatients: PatientsStore["listPatients"]) => void;
  setKeyword: (keyWord: PatientsStore["keyWord"]) => void;
  setPage: (page: PatientsStore["page"]) => void;
  setPerPage: (perPage: PatientsStore["perPage"]) => void;
  setOpenEdit: (openedEdit: PatientsStore["openedEdit"]) => void;
  setIdPatient: (idPatient: PatientsStore["idPatient"]) => void;
  setTotalItems: (totalItems: PatientsStore["totalItems"]) => void;
  setListIds: (listIds: PatientsStore["listIds"]) => void;
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
  page: 0,
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
  idPatient: "",
  setIdPatient: (idPatient) => {
    set(() => ({ idPatient }));
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
