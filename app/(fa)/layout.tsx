import type { Viewport } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/components/site";
import "../globals.css";

export const metadata = pageMetadata("fa");
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F7F0" },
    { media: "(prefers-color-scheme: dark)", color: "#101D18" },
  ],
};

export default function PersianLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
