import { Gender, UpdatePatientInput } from "@/graphql/type.interface";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Họ tên không được để trống"),
  phoneNumber: Yup.string()
    .required("Số điện thoại không được để trống")
    .matches(/^[0-9]+$/, "Số điện thoại không hợp lệ"),
});
interface UpdatePatientProps {
  idPatient: string;
}
export const useUpdatePatient = ({ idPatient }: UpdatePatientProps) => {
  const formik = useFormik<UpdatePatientInput>({
    initialValues: {
      id: idPatient,
      fullName: "",
      email: "",
      address: "",
      dateOfBirth: "",
      gender: "UNSPECIFIED" as Gender,
      phoneNumber: "",
      healthInsuranceId: "",
      metadata: {},
      phonePrefix: "",
    },
    validationSchema,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return {
    formik,
  };
};
