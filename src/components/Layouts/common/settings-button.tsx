import { motion } from "framer-motion";
// @mui
import { Theme, SxProps } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { Icon } from "@/components/icons";
// components

// ----------------------------------------------------------------------

type Props = {
  sx?: SxProps<Theme>;
};

export default function SettingsButton({ sx }: Props) {
  // const settings = useSettingsContext();

  return (
    <Badge
      color="error"
      variant="dot"
      sx={{
        [`& .${badgeClasses.badge}`]: {
          top: 8,
          right: 8,
        },
        ...sx,
      }}
    >
      <Box
        component={motion.div}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <IconButton
          component={motion.button}
          whileTap="tap"
          whileHover="hover"
          aria-label="settings"
          // onClick={settings.onToggle}
          sx={{
            width: 40,
            height: 40,
          }}
        >
          <Icon icon="/assets/icons/header/setting.svg" />
        </IconButton>
      </Box>
    </Badge>
  );
}
