"use client";

import { useState, memo, useCallback } from "react";
// import parse from "autosuggest-highlight/parse";
// import match from "autosuggest-highlight/match";
// @mui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Dialog, { dialogClasses } from "@mui/material/Dialog";
// hooks
// import { useRouter } from "next/navigation";

// import { applyFilter, groupedData, getAllItems } from "./utils";
// import { useResponsive } from "@/hooks/use-responsive";
import { useBoolean } from "@/hooks/use-boolean";
import { Icon } from "@/components/icons";
import { Typography } from "@mui/material";
// import ResultItem from "./result-item";

// ----------------------------------------------------------------------

function Searchbar() {
  const theme = useTheme();

  // const router = useRouter();

  const search = useBoolean();

  // const mdUp = useResponsive("up", "md");

  const [searchQuery, setSearchQuery] = useState("");

  // const navData = useNavData();

  const handleClose = useCallback(() => {
    search.onFalse();
    setSearchQuery("");
  }, [search]);

  // const handleKeyDown = (event: KeyboardEvent) => {
  //   if (event.key === "k" && event.metaKey) {
  //     search.onToggle();
  //     setSearchQuery("");
  //   }
  // };

  // useEventListener("keydown", handleKeyDown);

  // const handleClick = useCallback(
  //   (path: string) => {
  //     if (path.includes("http")) {
  //       window.open(path);
  //     } else {
  //       router.push(path);
  //     }
  //     handleClose();
  //   },
  //   [handleClose, router]
  // );

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setSearchQuery(event.target.value);
    },
    []
  );

  // const dataFiltered = applyFilter({
  //   inputData: getAllItems({ data: navData }),
  //   query: searchQuery,
  // });

  // const notFound = searchQuery && !dataFiltered.length;

  // const renderItems = () => {
  //   const data = groupedData(dataFiltered);

  //   return Object.keys(data)
  //     .sort((a, b) => -b.localeCompare(a))
  //     .map((group, index) => (
  //       <List key={group || index} disablePadding>
  //         {data[group].map((item) => {
  //           const { title, path } = item;

  //           const partsTitle = parse(title, match(title, searchQuery));

  //           const partsPath = parse(path, match(path, searchQuery));

  //           return (
  //             <ResultItem
  //               path={partsPath}
  //               title={partsTitle}
  //               key={`${title}${path}`}
  //               groupLabel={searchQuery && group}
  //               onClickItem={() => handleClick(path)}
  //             />
  //           );
  //         })}
  //       </List>
  //     ));
  // };

  const renderButton = (
    <Stack
      direction="row"
      alignItems="center"
      // sx={{ background: "#919EAB14", borderRadius: "12px" }}
    >
      <IconButton onClick={search.onTrue}>
        <Icon icon="/assets/icons/header/search.svg" />
      </IconButton>
      {/* <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: 500,
          padding: "0px 6px",
          background: "#fff",
        }}
      >
        ⌘K
      </Typography> */}
    </Stack>
  );

  return (
    <>
      {renderButton}

      <Dialog
        fullWidth
        maxWidth="sm"
        open={search.value}
        onClose={handleClose}
        transitionDuration={{
          enter: theme.transitions.duration.shortest,
          exit: 0,
        }}
        PaperProps={{
          sx: {
            mt: 15,
            overflow: "unset",
          },
        }}
        sx={{
          [`& .${dialogClasses.container}`]: {
            alignItems: "flex-start",
          },
        }}
      >
        <Box sx={{ p: 3, borderBottom: `solid 1px ${theme.palette.divider}` }}>
          <InputBase
            fullWidth
            autoFocus
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <Icon icon="/assets/icons/header/search.svg" />
              </InputAdornment>
            }
            inputProps={{
              sx: { typography: "h6" },
            }}
          />
        </Box>

        {/* <Scrollbar sx={{ p: 3, pt: 2, height: 400 }}>
          {notFound ? (
            <SearchNotFound query={searchQuery} sx={{ py: 10 }} />
          ) : (
            renderItems()
          )}
        </Scrollbar> */}
      </Dialog>
    </>
  );
}

export default memo(Searchbar);
