import { CreateUserMutationVariables } from "@/graphql/mutations/createUser.generated";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must contain only digits")
    .max(10, "Phone number must not exceed 10 digits")
    .min(6, "Phone number cannot be empty"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must include at least one uppercase letter")
    .matches(/[a-z]/, "Password must include at least one lowercase letter")
    .matches(/[0-9]/, "Password must include at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must include at least one special character"
    ),

  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
export default function useSignUp() {
  const [focusPassword, setFocusPassword] = useState<boolean>(false);

  const formik = useFormik<CreateUserMutationVariables>({
    initialValues: {
      input: {
        email: "",
        fullName: "",
        password: "",
        phoneNumber: "",
        phonePrefix: "",
      },
    },
    validationSchema,
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return {
    formik,
    focusPassword,
    setFocusPassword,
  };
}
