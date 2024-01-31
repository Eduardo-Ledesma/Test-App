import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ComponentProps } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test App",
  description: "This is an app created just to learn some techs",
};

export default function RootLayout({
  children,
}: ComponentProps) {
  return (
    <html lang="en">
      <body className={`${"bg-[#11141C] text-headline p-4 inter.className"}`}>{children}</body>
    </html>
  );
}
