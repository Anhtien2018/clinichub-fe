import { usePatientLazyQuery } from "@/graphql/queries/patient.generated";
import { Patient } from "@/graphql/type.interface";
import { useEffect, useState } from "react";

interface UsePatient {
  idPatient: string;
}
export function useProfilePatient({ idPatient }: UsePatient) {
  const [patient, setPatient] = useState<Patient>({} as Patient);
  const [valueTab, setValueTab] = useState<string>("profile");
  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setValueTab(newValue);
  };
  const [getPatient] = usePatientLazyQuery({
    onCompleted(data) {
      console.log("Patient data:", data);
      setPatient(data.patient as Patient);
    },
    onError(error) {
      console.log(error);
    },
  });
  useEffect(() => {
    getPatient({
      variables: { id: idPatient },
    });
  }, []);
  return {
    patient,
    valueTab,
    handleChangeTab,
  };
}
