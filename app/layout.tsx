import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "easyWear",
  description: "Personal styling assistant helping all genders find comfortable outfit combinations from their existing wardrobe",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}