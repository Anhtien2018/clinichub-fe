"use client";

import { useLoginMutation } from "@/graphql/mutations/login.generated";
import { LoginMutationVariables } from "@/graphql/mutations/login.generated";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/helpers/constants";

const validationSchema = Yup.object({
  loginInput: Yup.object({
    email: Yup.string()
      .required("Email không được bỏ trống")
      .email("Email không hợp lệ")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email không hợp lệ"
      ),
    password: Yup.string().required("Mật khẩu không được bỏ trống"),
  }),
});
export default function useSignIn() {
  const [focusPassword, setFocusPassword] = useState<boolean>(false);
  const [login] = useLoginMutation({
    onCompleted: (data) => {
      Cookies.set(TOKEN_KEY, data.login.accessToken);
      Cookies.set(REFRESH_TOKEN_KEY, data.login.refreshToken);
    },
    onError: (error) => {
      console.error("Login error", error.message);
    },
  });

  const formik = useFormik<LoginMutationVariables>({
    initialValues: {
      loginInput: {
        deviceId: undefined,
        deviceInfo: undefined,
        email: "",
        password: "",
      },
    },
    validationSchema,
    onSubmit: (value) => {
      login({
        variables: {
          loginInput: {
            email: value.loginInput.email,
            password: value.loginInput.password,
          },
        },
      });
    },
  });

  return {
    formik,
    focusPassword,
    setFocusPassword,
  };
}
