"use client";

import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { FieldInput } from "../Field/FieldInput";
import { ButtonCustom } from "../Button";
import { StyleGapInput } from "./style";
import RouterLink from "next/link";
import { paths } from "@/common/constants";
import CustomLink from "../Link/CustomLink";
import useSignIn from "./hooks/Use-Sign-In";

export default function FormSignIn(): React.ReactElement {
  const { formik, focusPassword, setFocusPassword, value } = useSignIn();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100dvh",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: "100%",
          padding: "0px 40px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Box sx={{ fontWeight: "600", fontSize: "2rem" }}>
            Đăng nhập với Minimal
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Typography sx={{ fontWeight: 500 }} component="div">
              Bạn đã có tài khoản ?
            </Typography>
            <CustomLink
              sx={{ color: "#00A76F", fontWeight: 700 }}
              href={paths.auth.signUp}
            >
              Đăng ký
            </CustomLink>
          </Box>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box sx={StyleGapInput}>
              <Typography>Email</Typography>
              <FieldInput
                size="small"
                placeholder="Email"
                label=""
                name="loginInput.email"
                value={formik.values.loginInput.email ?? ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ borderRadius: "8px" }}
                isError={Boolean(
                  formik.touched.loginInput?.email &&
                    formik.errors.loginInput?.email
                )}
                errorText={formik.errors.loginInput?.email}
              />
            </Box>
            <Box sx={StyleGapInput}>
              <Typography>Mật khẩu</Typography>
              <FieldInput
                onFocus={() => setFocusPassword(true)}
                onBlur={(e) => {
                  setFocusPassword(false);
                  formik.handleBlur(e);
                }}
                typeInput={focusPassword ? "text" : "password"}
                size="small"
                placeholder="Mật khẩu"
                label={""}
                name="loginInput.password"
                onChange={formik.handleChange}
                sx={{ borderRadius: "8px" }}
                value={formik.values.loginInput.password ?? ""}
                errorText={formik.errors.loginInput?.password}
                isError={Boolean(
                  formik.touched.loginInput?.password &&
                    formik.errors.loginInput?.password
                )}
              />
            </Box>
            <Box sx={{ textAlign: "end" }}>
              <Link component={RouterLink} href="#" underline="none">
                Quên mật khẩu ?
              </Link>
            </Box>
            <ButtonCustom
              loading={value}
              type="submit"
              sx={{
                background: "#212B36",
                padding: "11px 0px",
                borderRadius: "8px",
                height: "46px",
              }}
              sxText={{ color: "#fff", fontWeight: "600" }}
              variant="outlined"
              text="Đăng nhập"
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
}
