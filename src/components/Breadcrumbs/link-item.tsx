// @mui
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
// routes
import RouterLink from "next/link";
//
import { BreadcrumbsLinkProps } from "./types";
import { textPrimary } from "@/common/color";

// ----------------------------------------------------------------------

type Props = {
  link: BreadcrumbsLinkProps;
  activeLast?: boolean;
  disabled: boolean;
};

export default function BreadcrumbsLink({ link, activeLast, disabled }: Props) {
  const { name, href, icon } = link;

  const styles = {
    alignItems: "center",
    color: textPrimary,
    textTransform: "capitalize",
    fontSize: "0.875rem",
    fontWeight: 400,
    display: "inline-flex",
    ...(disabled &&
      !activeLast && {
        cursor: "default",
        pointerEvents: "none",
        color: "text.disabled",
      }),
  };

  const renderContent = (
    <>
      {icon && (
        <Box
          component="span"
          sx={{
            mr: 1,
            display: "inherit",
            "& svg": { width: 20, height: 20 },
          }}
        >
          {icon}
        </Box>
      )}

      {name}
    </>
  );

  if (href) {
    return (
      <Link
        component={RouterLink}
        href={href}
        sx={{ ...styles }}
        underline="none"
      >
        {renderContent}
      </Link>
    );
  }

  return <Box sx={{ ...styles }}> {renderContent} </Box>;
}
