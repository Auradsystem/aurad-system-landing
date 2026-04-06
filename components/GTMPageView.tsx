"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pushEvent } from "@/lib/gtm";

export function GTMPageView() {
  const pathname = usePathname();

  useEffect(() => {
    pushEvent({
      event: "page_view",
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
