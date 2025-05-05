"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { usePathname } from "next/navigation";

import LinkItem from "./link-item";
import { textPrimary } from "@/common/color";

// ----------------------------------------------------------------------

interface CustomBreadcrumbsProps {
  heading?: string;
  action?: React.ReactNode;
  moreLink?: string[];
  activeLast?: boolean;
  sx?: any;
}

export default function CustomBreadcrumbs({
  action,
  heading,
  moreLink,
  activeLast = false,
  sx,
  ...other
}: CustomBreadcrumbsProps) {
  const pathname = usePathname();

  const segments = pathname.split("/").filter((seg) => seg);

  const links = segments.map((seg, index) => {
    const path = "/" + segments.slice(0, index + 1).join("/");
    return {
      name: decodeURIComponent(seg),
      href: path,
    };
  });

  const lastLink = links[links.length - 1]?.name;

  return (
    <Box sx={{ ...sx }}>
      <Stack direction="row" alignItems="center">
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* HEADING */}
          {heading && (
            <Typography
              sx={{ fontWeight: 700, fontSize: "1.5rem", color: textPrimary }}
            >
              {heading}
            </Typography>
          )}

          {/* BREADCRUMBS */}
          {links.length !== 1 && (
            <Breadcrumbs separator={<Separator />} {...other}>
              {links.map((link) => (
                <LinkItem
                  key={link.name}
                  link={link}
                  activeLast={activeLast}
                  disabled={link.name === lastLink}
                />
              ))}
            </Breadcrumbs>
          )}
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}> {action} </Box>}
      </Stack>

      {!!moreLink?.length && (
        <Box sx={{ mt: 2 }}>
          {moreLink.map((href) => (
            <Link
              key={href}
              href={href}
              variant="body2"
              target="_blank"
              rel="noopener"
              sx={{ display: "table" }}
            >
              {href}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

function Separator() {
  return (
    <Box
      component="span"
      sx={{
        width: 4,
        height: 4,
        borderRadius: "50%",
        bgcolor: "text.disabled",
      }}
    />
  );
}
