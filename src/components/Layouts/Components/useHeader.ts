import { useClinicLazyQuery } from "@/graphql/queries/clinic.generated";
import { ClinicEntity } from "@/graphql/type.interface";
import { useAuthStore } from "@/stores/User/useAuthStore";
import { useEffect, useState } from "react";

export function useHeader() {
  const { user } = useAuthStore();
  const [clinic, setClinic] = useState<ClinicEntity>({} as ClinicEntity);
  const [getClinic] = useClinicLazyQuery({
    onCompleted: (data) => {
      console.log(data);
      setClinic(data.clinic);
    },
    onError(error) {
      console.log(error);
    },
  });
  useEffect(() => {
    if (user) {
      void getClinic({
        variables: {
          id: user?.clinics?.[0]?.id ?? "",
        },
      });
    }
  }, [user]);
  return {
    clinic,
  };
}
