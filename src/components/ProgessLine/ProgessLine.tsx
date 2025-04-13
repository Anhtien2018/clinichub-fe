"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams(); // 👈 cần để detect query params thay đổi

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.start();
    const timer = setTimeout(() => NProgress.done(), 500); // 👈 Giúp progress bar mượt hơn
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return null;
}
