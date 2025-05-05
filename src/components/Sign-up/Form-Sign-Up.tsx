"use client";

import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { FieldInput } from "@/components/Field/FieldInput";
import { ButtonCustom } from "@/components/Button";
import { StyleGapInput } from "../Sign-In/style";
import { paths } from "@/common/constants";
import RouterLink from "next/link";
// import useSignUp from "./hooks/Use-Sign-Up";

export default function FormSignUp(): React.ReactElement {
  // const { formik, focusPassword, setFocusPassword } = useSignUp();
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
          <Typography sx={{ fontWeight: "600", fontSize: "2rem" }}>
            Đăng ký với Minimal
          </Typography>
          <Typography sx={{ fontWeight: 500 }} component="div">
            Bạn đã có tài khoản ?{" "}
            <Link
              sx={{ color: "#00A76F", fontWeight: 700 }}
              component={RouterLink}
              href={paths.auth.signIn}
              underline="none"
            >
              Đăng nhập
            </Link>
          </Typography>
        </Box>
        {/* <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box sx={StyleGapInput}>
              <Typography>Họ tên</Typography>
              <FieldInput
                size="small"
                placeholder="Họ tên"
                label=""
                name="input.fullName"
                sx={{ borderRadius: "8px" }}
                value={formik.values.input.fullName ?? ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isError={Boolean(
                  formik.errors.input?.fullName &&
                    formik.touched.input?.fullName
                )}
                errorText={formik.errors.input?.fullName}
              />
            </Box>
            <Box sx={StyleGapInput}>
              <Typography>Số điện thoại</Typography>
              <FieldInput
                size="small"
                placeholder="Số điện thoại"
                label=""
                sx={{ borderRadius: "8px" }}
                name="input.phoneNumber"
                value={formik.values.input.phoneNumber ?? ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isError={false}
              />
            </Box>
            <Box sx={StyleGapInput}>
              <Typography>Email</Typography>
              <FieldInput
                size="small"
                placeholder="Email"
                label=""
                name="input.email"
                sx={{ borderRadius: "8px" }}
                value={formik.values.input.email ?? ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isError={false}
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
                sx={{ borderRadius: "8px" }}
                label={""}
                name="input.password"
                value={formik.values.input.password ?? ""}
                onChange={formik.handleChange}
                isError={false}
              />
            </Box>

            <Box sx={StyleGapInput}>
              <Typography>Xác nhận mật khẩu</Typography>
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
                name="input.confirmPassword"
                sx={{ borderRadius: "8px" }}
                value={formik.values.input.password ?? ""}
                onChange={formik.handleChange}
                isError={false}
              />
            </Box>

            <ButtonCustom
              type="submit"
              sx={{
                background: "#212B36",
                padding: "11px 0px",
                borderRadius: "8px",
                height: "46px",
              }}
              sxText={{ color: "#fff", fontWeight: "600" }}
              variant="outlined"
              text="Đăng ký"
            />
          </Box>
        </form> */}
      </Box>
    </Box>
  );
}
