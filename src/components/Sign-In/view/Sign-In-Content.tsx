import { Box } from "@mui/material";
import React from "react";
import ImageSignIn from "../Image-Sign-in";
import Grid from "@mui/material/Grid";

export default function SignInContent(): React.ReactElement {
  return (
    <Box>
      <Grid container>
        <Grid size={{ lg: 9, md: 9, sm: 9, xs: 9 }}>
          <Box>
            <ImageSignIn />
          </Box>
        </Grid>
        <Grid size={{ lg: 3, md: 3, sm: 3, xs: 3 }}>
          <Box>Image Sign In</Box>
        </Grid>
      </Grid>
    </Box>
  );
}
