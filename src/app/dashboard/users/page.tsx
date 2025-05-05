import UsersContent from "@/components/Users/view/UserContent";
import { Box } from "@mui/material";
import { Metadata } from "next";
import React from "react";

export const metadata = { title: `Bệnh nhân` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return <UsersContent />;
}
