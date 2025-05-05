import { useState } from "react";

export function useNavList() {
  const [openSubHeaders, setOpenSubHeaders] = useState<{
    [key: string]: boolean;
  }>({});
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [isHovering, setIsHovering] = useState<string>("");

  const toggleSubHeader = (key: string) => {
    setOpenSubHeaders((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSubMenu = (key: string) => {
    setOpenSubMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return {
    openSubHeaders,
    openSubMenus,
    isHovering,
    toggleSubHeader,
    toggleSubMenu,
    setIsHovering,
  };
}
