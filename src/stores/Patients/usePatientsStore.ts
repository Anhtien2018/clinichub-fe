import { MaxSizePage } from "@/common/constants";
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
  openDialog: boolean;
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
  setOpenDialog: (openDialog: PatientsStore["openDialog"]) => void;
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
  perPage: MaxSizePage,
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
  openDialog: false,
  setOpenDialog: (openDialog) => {
    set(() => ({ openDialog }));
  },
}));
