"use client";

import { Box, Typography, Collapse } from "@mui/material";
import React, { useState } from "react";
import NavItem from "./nav-item";
import { dataNav } from "@/configs/config-navigation";
import { colorSubHeader } from "./styles";

interface NavListProps {
  isOpen?: boolean;
}

export default function NavList({
  isOpen = false,
}: NavListProps): React.JSX.Element {
  const [openSubHeaders, setOpenSubHeaders] = useState<{
    [key: string]: boolean;
  }>({});

  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSubHeader = (key: string) => {
    setOpenSubHeaders((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleSubMenu = (key: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const [isHovering, setIsHovering] = useState<string>("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: isOpen ? "10px" : "20px",
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
              style={{ position: "relative" }}
              in={!openSubHeaders[index.toString()]}
              timeout="auto"
              unmountOnExit
            >
              {item.items.length !== 0 && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    position: "relative",
                  }}
                >
                  {item.items.map((navItem, idx) => {
                    const key = `${index}-${idx}`;
                    const hasChildren =
                      Array.isArray(navItem.children) &&
                      navItem.children.length > 0;

                    return (
                      <Box
                        onMouseEnter={() => setIsHovering(key)}
                        onMouseLeave={() => setIsHovering("")}
                        key={key}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <Box
                          onClick={() => hasChildren && toggleSubMenu(key)}
                          sx={{
                            cursor: hasChildren ? "pointer" : "default",
                            hover: {
                              backgroundColor: "#919EAB14",
                            },
                            backgroundColor:
                              !openSubMenus[key] && hasChildren && !isOpen
                                ? "#919EAB14"
                                : "",
                          }}
                        >
                          <NavItem
                            data={navItem}
                            isOpen={isOpen}
                            hasChildren={hasChildren}
                          />
                        </Box>
                        {!isOpen && hasChildren && (
                          <Collapse
                            // style={{ borderLeft: "1px solid red" }}
                            style={{ position: "relative" }}
                            in={!openSubMenus[key]}
                            timeout="auto"
                            unmountOnExit
                          >
                            <Box
                              sx={{
                                top: 0,
                                left: 5,
                                width: "2px",
                                position: "absolute",
                                backgroundColor: "#EDEFF2",
                                content: '""',
                                bottom: 0,
                                height: "100%", // nếu bạn muốn override bottom và set height cứng
                              }}
                            />

                            <Box
                              sx={{
                                mt: "10px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                padding: "0px 0px 0px 20px",
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
                        {isOpen && hasChildren && (
                          <Box
                            sx={{
                              position: "absolute",
                              right: -10,
                              zIndex: "9999999",
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
