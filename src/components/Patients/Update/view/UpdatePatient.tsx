import { textPrimary } from "@/common/color";
import { genderOptions } from "@/common/constants";
import { ButtonCustom } from "@/components/Button";
import { DatePicker, FieldInput } from "@/components/Field";
import CustomSelect from "@/components/Field/Select";
import { backgroundImage } from "@/styles/style";
import {
  Alert,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import { useUpdatePatient } from "../hooks/useUpdatePatien";

interface FormUpdatePatientProps {
  idPatient: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}
export default function UpdatePatient({
  idPatient,
  open,
  setOpen,
}: FormUpdatePatientProps): React.JSX.Element {
  const { formik } = useUpdatePatient({ idPatient });
  return (
    <Dialog
      fullWidth
      maxWidth={false}
      open={open}
      // onClose={onToggle}
      PaperProps={{
        sx: { maxWidth: 720, ...backgroundImage(), borderRadius: "16px" },
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle sx={{ padding: "24px 24px" }}>
          <Typography sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
            Chỉnh sửa bệnh nhân
          </Typography>
        </DialogTitle>

        <DialogContent sx={{ padding: "0px 24px" }}>
          <Alert variant="outlined" severity="success" sx={{ mb: 3 }}>
            Account is waiting for confirmation
          </Alert>

          <Box
            rowGap={3}
            columnGap={2}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Typography>Họ Tên</Typography>

              <FieldInput
                size="small"
                placeholder="Vui lòng nhập họ tên"
                label=""
                name="fullName"
                value={formik.values.fullName ?? ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ borderRadius: "8px" }}
                isError={Boolean(
                  formik.touched.fullName && formik.errors.fullName
                )}
                errorText={formik.errors.fullName}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Typography>Email</Typography>
              <FieldInput
                typeInput="text"
                size="small"
                name="email"
                label={""}
                value={formik.values.email ?? ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Vui lòng nhập email"
                isError={false}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Typography>Số điện thoại</Typography>
              <FieldInput
                typeInput="text"
                size="small"
                name="phoneNumber"
                label={""}
                value={formik.values.phoneNumber ?? ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Vui lòng nhập số điện thoại"
                isError={Boolean(
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                )}
                errorText={formik.errors.phoneNumber}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Typography>Địa chỉ</Typography>
              <FieldInput
                typeInput="text"
                size="small"
                name="address"
                label={""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address ?? ""}
                placeholder="Vui lòng nhập địa chỉ"
                isError={false}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Typography>Ngày sinh</Typography>
              <DatePicker
                value={formik.values.dateOfBirth}
                onChange={formik.setFieldValue}
                name="dateOfBirth"
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Typography>Giới tính</Typography>
              <CustomSelect
                name="gender"
                value={formik.values.gender ?? ""}
                onChange={formik.handleChange}
                options={genderOptions}
              />
            </Box>
          </Box>
        </DialogContent>

        <DialogActions sx={{ padding: "24px 24px" }}>
          <ButtonCustom
            sx={{ border: "1px solid initial", padding: "7px 15px" }}
            text="Hủy"
            variant="outlined"
            onClick={() => {
              setOpen(false);
            }}
          />

          <ButtonCustom
            sx={{
              background: textPrimary,
              width: "150px",
              height: "40px",
              padding: "0px 0px",
            }}
            size="8"
            text="Xác nhận thêm"
            sxText={{ color: "#fff " }}
            // loading={loading}
            // disabled={loading}
            type="submit"
            variant="outlined"
          />
        </DialogActions>
      </form>
    </Dialog>
  );
}
