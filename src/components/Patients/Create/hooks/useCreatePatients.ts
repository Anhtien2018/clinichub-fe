"use client";

import { ToastMessage } from "@/components/Toast/ToastMessage";
import { useCreatePatientMutation } from "@/graphql/mutation/createPatient.generated";
import { CreatePatientInput, Gender, Patient } from "@/graphql/type.interface";
import { useBoolean } from "@/hooks/use-boolean";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Họ tên không được để trống"),
  phoneNumber: Yup.string()
    .required("Số điện thoại không được để trống")
    .matches(/^[0-9]+$/, "Số điện thoại không hợp lệ"),
});
interface CreatePatientsProps {
  dataRow: Patient[];
  setDataRow: (data: Patient[]) => void;
}
export function useCreatePatients({
  dataRow,
  setDataRow,
}: CreatePatientsProps) {
  const { value, onToggle } = useBoolean();
  const [createPatients] = useCreatePatientMutation({
    onCompleted(data) {
      if (data.createPatient) {
        setDataRow([data.createPatient, ...(dataRow as Patient[])]);
        ToastMessage("success", "Thêm bệnh nhân thành công");
        formik.resetForm();
        onToggle();
      }
    },
    onError(error) {
      console.log(error);
      onToggle();
    },
  });
  const formik = useFormik<CreatePatientInput>({
    initialValues: {
      fullName: "",
      email: "",
      address: "",
      clinicId: "",
      dateOfBirth: "",
      gender: "UNSPECIFIED" as Gender,
      phoneNumber: "",
      healthInsuranceId: "",
      metadata: {},
      phonePrefix: "",
    },
    validationSchema,
    onSubmit: (value) => {
      onToggle();
      void createPatients({
        variables: {
          createPatientInput: { ...value },
        },
      });
    },
  });

  return {
    formik,
    loading: value,
  };
}
