"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    // @ts-ignore
    window.gtag?.("config", "G-06PTRVNTFS", {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}
