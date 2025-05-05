"use client";

import { Box, Typography, Collapse } from "@mui/material";
import React from "react";
import NavItem from "./nav-item";
import { dataNav } from "@/configs/config-navigation";
import { colorSubHeader } from "./styles";
import { useNavList } from "./useNavLeft";

interface NavListProps {
  isOpen?: boolean;
}

export default function NavList({ isOpen = false }: NavListProps) {
  const {
    openSubHeaders,
    openSubMenus,
    isHovering,
    toggleSubHeader,
    toggleSubMenu,
    setIsHovering,
  } = useNavList();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: isOpen ? "10px" : "20px",
        position: "relative",
      }}
    >
      {dataNav.map((item, index) =>
        item.subheader ? (
          <Box
            key={index}
            sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {!isOpen && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  cursor: "pointer",
                }}
                onClick={() => toggleSubHeader(index.toString())}
              >
                <Box
                  component="img"
                  src="/assets/icons/navbar/ic_arrowDown.svg"
                  sx={{
                    width: 20,
                    height: 20,
                    transition: "transform 0.3s ease",
                    transform: !openSubHeaders[index]
                      ? "rotate(0deg)"
                      : "rotate(-90deg)",
                  }}
                />
                <Typography sx={colorSubHeader}>{item.subheader}</Typography>
              </Box>
            )}

            <Collapse
              in={!openSubHeaders[index.toString()]}
              timeout="auto"
              unmountOnExit
            >
              {item.items.length > 0 && (
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  {item.items.map((navItem, idx) => {
                    const key = `${index}-${idx}`;
                    const hasChildren =
                      Array.isArray(navItem.children) &&
                      navItem.children.length > 0;
                    return (
                      <Box
                        key={key}
                        onMouseEnter={() => setIsHovering(key)}
                        onMouseLeave={() => setIsHovering("")}
                        sx={{ position: "relative" }}
                      >
                        <Box
                          onClick={() => hasChildren && toggleSubMenu(key)}
                          sx={{
                            cursor: hasChildren ? "pointer" : "default",
                            backgroundColor:
                              !openSubMenus[key] && hasChildren && !isOpen
                                ? "#919EAB14"
                                : "",
                          }}
                        >
                          <NavItem
                            data={navItem}
                            isOpen={isOpen}
                            subItem
                            hasChildren={hasChildren}
                          />
                        </Box>

                        {!isOpen && hasChildren && (
                          <Collapse
                            in={!openSubMenus[key]}
                            timeout="auto"
                            unmountOnExit
                          >
                            <Box
                              sx={{
                                position: "absolute",
                                top: 0,
                                left: 5,
                                width: "2px",
                                height: "100%",
                                backgroundColor: "#EDEFF2",
                              }}
                            />
                            <Box
                              sx={{
                                mt: "10px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                paddingLeft: "20px",
                              }}
                            >
                              {navItem.children?.map((child, childIdx) => (
                                <NavItem
                                  key={childIdx}
                                  data={child}
                                  hasChildren
                                />
                              ))}
                            </Box>
                          </Collapse>
                        )}

                        {isOpen && hasChildren && isHovering === key && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: 20,
                              right: -50,
                              zIndex: 9999,
                            }}
                          >
                            123
                          </Box>
                        )}
                      </Box>
                    );
                  })}
                </Box>
              )}
            </Collapse>
          </Box>
        ) : null
      )}
    </Box>
  );
}
