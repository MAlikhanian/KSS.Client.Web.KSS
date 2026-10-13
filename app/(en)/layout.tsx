import type { Viewport } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/components/site";
import "../globals.css";

export const metadata = pageMetadata("en");
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F7F0" },
    { media: "(prefers-color-scheme: dark)", color: "#101D18" },
  ],
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
