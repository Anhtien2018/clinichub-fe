"use client";

import { Box, Link, Typography } from "@mui/material";
import { childrenNav } from "@/types/interface";
import RouterLink from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  data: childrenNav;
  sx?: object;
  hasChildren?: boolean;
  isOpen?: boolean;
  subItem?: boolean;
}

export default function NavItem({
  data,
  sx,
  isOpen = false,
  hasChildren = false,
  subItem = false,
}: NavItemProps) {
  const Wrapper: React.ElementType = subItem && hasChildren ? Box : Link;
  const pathname = usePathname(); //
  const isActive = pathname === data.path;
  const commonStyles = {
    ...sx,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    cursor: "pointer",
    "&:hover": {
      background: "#919EAB14",
    },
    padding: "10px 6px",
    borderRadius: "8px",
    background: isActive ? "#919EAB14" : "transparent", // 👈 Nếu active thì có nền
    position: "relative",
  };

  const renderArrowIcon = () =>
    hasChildren &&
    !subItem && (
      <Box
        sx={{ position: "absolute", left: -14 }}
        component="img"
        src="/assets/icons/navbar/ic_arrow.svg"
        alt="arrow"
      />
    );

  const renderContent = () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: isOpen ? "column" : "row",
        gap: data.icon ? "10px" : "0",
        justifyContent: isOpen ? "center" : "start",
      }}
    >
      {data.icon && (
        <Box sx={{ width: "24px", height: "24px", position: "relative" }}>
          {data.icon}
          {isOpen && hasChildren && (
            <Box
              sx={{
                transform: "rotate(180deg)",
                position: "absolute",
                right: -20,
                top: 4,
              }}
              component="img"
              src="/assets/icons/navbar/ic_arrow_open.svg"
            />
          )}
        </Box>
      )}
      <Typography
        sx={{ fontWeight: 500, fontSize: isOpen ? "0.625rem" : "1rem" }}
      >
        {data.title}
      </Typography>
    </Box>
  );

  return (
    <Wrapper
      {...(subItem && hasChildren
        ? { sx: commonStyles }
        : {
            href: data.path || "#",
            underline: "none",
            color: "inherit",
            component: RouterLink,
            sx: commonStyles,
          })}
    >
      {renderArrowIcon()}
      {renderContent()}
    </Wrapper>
  );
}
