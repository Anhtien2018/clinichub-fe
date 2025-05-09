"use client";

import "@/styles/globals.css";
import { theme } from "@/themes/theme";
import { ThemeProvider } from "@mui/material";
import ProgressBar from "@/components/ProgessLine/ProgessLine";
import { ClientApolloProvider } from "@/apollo/ApolloProvider";
import { UserProvider } from "@/zustand/UserProvider";
import ToastContainerComponent from "@/components/Toast/ToastMessage";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/logo_single.svg" />
      </head>
      <body>
        <ClientApolloProvider>
          <UserProvider>
            <ProgressBar />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
            <ToastContainerComponent />
          </UserProvider>
        </ClientApolloProvider>
      </body>
    </html>
  );
}
