import ProductContent from "@/components/Products/view/ProductsContent";
import { Box } from "@mui/material";
import { Metadata } from "next";
import React from "react";

export const metadata = { title: `Product` } satisfies Metadata;

export default function Page(): React.ReactElement {
  return <ProductContent />;
}
