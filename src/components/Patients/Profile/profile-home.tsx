"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardHeader from "@mui/material/CardHeader";
import { Gender, Patient } from "@/graphql/type.interface";
import { Icon } from "@/components/icons";
import { Grid, Typography } from "@mui/material";
import { formatDateTime, generateGenderVi } from "@/common/helper";
import { ButtonCustom } from "@/components/Button";
import { textPrimary } from "@/common/color";

interface ProfileHomeProps {
  patient: Patient;
}
export default function ProfileHome({ patient }: ProfileHomeProps) {
  const renderAbout = (
    <Card>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CardHeader title="Thông tin cá nhân" />
        <ButtonCustom
          text="Chỉnh sửa"
          variant="outlined"
          sx={{ border: `1px solid ${textPrimary}`, margin: "0px 16px" }}
        />
      </Box>

      <Stack spacing={2} sx={{ p: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {/* <Icon icon="" /> */}
          <Typography>Họ và tên:</Typography>
          <Typography sx={{ fontSize: "1rem", fontWeight: 600 }}>
            {patient?.fullName}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {/* <Icon icon="" /> */}
          <Typography>Email:</Typography>
          <Typography sx={{ fontSize: "1rem", fontWeight: 600 }}>
            {patient?.email ?? "Chưa có thông tin"}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {/* <Icon icon="" /> */}
          <Typography>Số điện thoại:</Typography>
          <Typography sx={{ fontSize: "1rem", fontWeight: 600 }}>
            {patient?.fullPhoneNumber ?? "Chưa có thông tin"}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {/* <Icon icon="" /> */}
          <Typography>Giới tính:</Typography>
          <Typography sx={{ fontSize: "1rem", fontWeight: 600 }}>
            {generateGenderVi(patient?.gender as Gender)}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {/* <Icon icon="" /> */}
          <Typography>Ngày sinh:</Typography>
          <Typography sx={{ fontSize: "1rem", fontWeight: 600 }}>
            {formatDateTime(patient?.dateOfBirth) ?? "Chưa có thông tin"}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {/* <Icon icon="" /> */}
          <Typography>Địa chỉ:</Typography>
          <Typography sx={{ fontSize: "1rem", fontWeight: 600 }}>
            {patient?.address ?? "Chưa có thông tin"}
          </Typography>
        </Box>

        <Stack direction="row" spacing={2}>
          {/* <Iconify icon="ic:round-business-center" width={24} /> */}

          <Box sx={{ typography: "body2" }}>
            {/* {patient.role} {`at `} */}
            <Link variant="subtitle2" color="inherit">
              {/* {info.company} */}
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );

  // const renderPostInput = (
  //   <Card sx={{ p: 3 }}>
  //     <InputBase
  //       multiline
  //       fullWidth
  //       rows={4}
  //       placeholder="Share what you are thinking here..."
  //       sx={{
  //         p: 2,
  //         mb: 3,
  //         borderRadius: 1,
  //         border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.2)}`,
  //       }}
  //     />

  //     <Stack direction="row" alignItems="center" justifyContent="space-between">
  //       <Stack
  //         direction="row"
  //         spacing={1}
  //         alignItems="center"
  //         sx={{ color: "text.secondary" }}
  //       >
  //         <Fab
  //           size="small"
  //           color="inherit"
  //           variant="softExtended"
  //           onClick={handleAttach}
  //         >
  //           <Iconify
  //             icon="solar:gallery-wide-bold"
  //             width={24}
  //             sx={{ color: "success.main" }}
  //           />
  //           Image/Video
  //         </Fab>

  //         <Fab size="small" color="inherit" variant="softExtended">
  //           <Iconify
  //             icon="solar:videocamera-record-bold"
  //             width={24}
  //             sx={{ color: "error.main" }}
  //           />
  //           Streaming
  //         </Fab>
  //       </Stack>

  //       <Button variant="contained">Post</Button>
  //     </Stack>

  //     <input ref={fileRef} type="file" style={{ display: "none" }} />
  //   </Card>
  // );

  // const renderSocials = (
  //   <Card>
  //     <CardHeader title="Social" />

  //     <Stack spacing={2} sx={{ p: 3 }}>
  //       {_socials.map((link) => (
  //         <Stack
  //           key={link.name}
  //           spacing={2}
  //           direction="row"
  //           sx={{ wordBreak: "break-all", typography: "body2" }}
  //         >
  //           <Iconify
  //             icon={link.icon}
  //             width={24}
  //             sx={{
  //               flexShrink: 0,
  //               color: link.color,
  //             }}
  //           />
  //           <Link color="inherit">
  //             {link.value === "facebook" && info.socialLinks.facebook}
  //             {link.value === "instagram" && info.socialLinks.instagram}
  //             {link.value === "linkedin" && info.socialLinks.linkedin}
  //             {link.value === "twitter" && info.socialLinks.twitter}
  //           </Link>
  //         </Stack>
  //       ))}
  //     </Stack>
  //   </Card>
  // );

  return (
    <Grid container spacing={3}>
      <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>
        <Stack spacing={3}>{renderAbout}</Stack>
      </Grid>

      {/* <Grid xs={12} md={8}>
        <Stack spacing={3}>
          {renderPostInput}

          {posts.map((post) => (
            <ProfilePostItem key={post.id} post={post} />
          ))}
        </Stack>
      </Grid> */}
    </Grid>
  );
}
