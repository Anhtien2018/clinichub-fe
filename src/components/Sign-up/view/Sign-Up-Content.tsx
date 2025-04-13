import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import ImageSignUp from "../Image-Sign-Up";
import FormSignUp from "../Form-Sign-Up";

export default function SignUpContent(): React.ReactElement {
  return (
    <Box sx={{ minHeight: "100dvh" }}>
      <Grid container>
        <Grid size={{ lg: 9, md: 9, sm: 9, xs: 9 }}>
          <Box>
            <ImageSignUp />
          </Box>
        </Grid>
        <Grid size={{ lg: 3, md: 3, sm: 3, xs: 3 }}>
          <Box>
            <FormSignUp />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
