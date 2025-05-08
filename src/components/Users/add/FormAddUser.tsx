import * as Yup from "yup";
// @mui
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { ButtonCustom } from "@/components/Button";
import AddIcon from "@mui/icons-material/Add";
import { useUser } from "../hooks/useUser";
import { FieldInput } from "@/components/Field";
import { Typography } from "@mui/material";

export default function FormAddUser(): React.JSX.Element {
  const { value, onToggle } = useUser();
  return (
    <>
      <ButtonCustom
        onClick={onToggle}
        variant="outlined"
        text="Thêm bệnh nhân"
        icon={<AddIcon />}
        sxText={{ fontWeight: 600 }}
        sx={{
          height: "40px",
          padding: "20px 20px",
          borderRadius: "8px",
          background: "#000",
          color: "#fff",
        }}
      />
      <Dialog
        fullWidth
        maxWidth={false}
        open={value}
        onClose={onToggle}
        PaperProps={{
          sx: { maxWidth: 720 },
        }}
      >
        <DialogTitle>Thêm bệnh nhân</DialogTitle>

        <DialogContent>
          <Alert variant="outlined" severity="info" sx={{ mb: 3 }}>
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
                typeInput="text"
                size="small"
                name="fullName"
                label={""}
                value={""}
                placeholder="Vui lòng nhập họ tên"
                isError={false}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Typography>Email</Typography>
              <FieldInput
                typeInput="text"
                size="small"
                name="email"
                label={""}
                value={""}
                placeholder="Vui lòng nhập email"
                isError={false}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Typography>Số điện thoại</Typography>
              <FieldInput
                typeInput="text"
                size="small"
                name="phone"
                label={""}
                value={""}
                placeholder="Vui lòng nhập số điện thoại"
                isError={false}
              />
            </Box>
            {/* <RHFTextField name="name" label="Full Name" />
          <RHFTextField name="email" label="Email Address" />
          <RHFTextField name="phoneNumber" label="Phone Number" />

          <RHFAutocomplete
            name="country"
            label="Country"
            options={countries.map((country) => country.label)}
            getOptionLabel={(option) => option}
            renderOption={(props, option) => {
              const { code, label, phone } = countries.filter(
                (country) => country.label === option
              )[0];

              if (!label) {
                return null;
              }

              return (
                <li {...props} key={label}>
                  <Iconify
                    key={label}
                    icon={`circle-flags:${code.toLowerCase()}`}
                    width={28}
                    sx={{ mr: 1 }}
                  />
                  {label} ({code}) +{phone}
                </li>
              );
            }}
          />

          <RHFTextField name="state" label="State/Region" />
          <RHFTextField name="city" label="City" />
          <RHFTextField name="address" label="Address" />
          <RHFTextField name="zipCode" label="Zip/Code" />
          <RHFTextField name="company" label="Company" />
          <RHFTextField name="role" label="Role" /> */}
          </Box>
        </DialogContent>

        <DialogActions>
          <ButtonCustom text="Hủy" variant="outlined" onClick={onToggle} />

          <ButtonCustom text="Xác nhận thêm" type="submit" variant="outlined" />
        </DialogActions>
      </Dialog>
    </>
  );
}
