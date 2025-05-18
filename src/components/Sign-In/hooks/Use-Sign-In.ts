"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import {
  LoginMutationVariables,
  useLoginMutation,
} from "@/graphql/mutation/login.generated";
import { setRefreshToken, setToken } from "@/common/cookies";
import { useRouter } from "next/navigation";
import { useBoolean } from "@/hooks/use-boolean";

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
  const { value, onTrue, onFalse } = useBoolean(false);
  const router = useRouter();
  const [login] = useLoginMutation({
    onCompleted: (data) => {
      setToken(data.login.accessToken as string);
      setRefreshToken(data.login.refreshToken as string);
      router.refresh();
      onFalse();
    },
    onError: (error) => {
      onFalse();
      console.error("Login error", error.message);
    },
  });

  const formik = useFormik<LoginMutationVariables>({
    initialValues: {
      loginInput: {
        email: "",
        password: "",
      },
    },
    validationSchema,
    onSubmit: (value) => {
      onTrue();
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
    value,
  };
}
