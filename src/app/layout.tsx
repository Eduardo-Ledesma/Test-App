import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test App",
  description: "This is an app created just to learn some techs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${"bg-zinc-900 text-gray-100 p-4 inter.className"}`}>{children}</body>
    </html>
  );
}
