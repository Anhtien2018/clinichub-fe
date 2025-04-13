// @mui
import { Theme, SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
// import { paths } from "@/helpers/constants";
// routes
//

// ----------------------------------------------------------------------

// const loginPaths: Record<string, string> = {
//   jwt: paths.auth.signIn,
//   auth0: paths.auth.signIn,
//   amplify: paths.auth.signIn,
//   firebase: paths.auth.signIn,
// };

type Props = {
  sx?: SxProps<Theme>;
};

export default function LoginButton({ sx }: Props) {
  return (
    <Button
      // component={RouterLink}
      // href={loginPath}
      variant="outlined"
      sx={{ mr: 1, ...sx }}
    >
      Login
    </Button>
  );
}
