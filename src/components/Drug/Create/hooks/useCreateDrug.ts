import { CreateDrugInput } from "@/graphql/type.interface";
import { useBoolean } from "@/hooks/use-boolean";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({});
export const useDrug = () => {
  const formik = useFormik<CreateDrugInput>({
    initialValues: {
      baseUnit: "",
    },
  });
  const { value, onToggle } = useBoolean();
  return {
    value,
    onToggle,
    formik,
  };
};
