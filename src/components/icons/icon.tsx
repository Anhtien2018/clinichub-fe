import Box from "@mui/material/Box";

interface Props {
  icon: string;
  sx?: object;
}

export default function Icon({ icon, sx }: Props) {
  return (
    <Box
      component="img"
      src={icon}
      sx={{
        ...sx,
      }}
    />
  );
}
