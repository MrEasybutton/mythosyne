import type { Metadata } from "next";
import "./globals.css";
import {Navigation} from "@/components/navigation";
import { Kode_Mono } from "next/font/google";

const main = Kode_Mono({ subsets:['latin'] })

export const metadata: Metadata = {
  title: "Mythosyne",
  description: "The Fanfiction IDE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${main.className} antialiased bg-gradient-to-tr from-gray-50 to-slate-50`}
      >
      <Navigation/>
        {children}
      </body>
    </html>
  );
}
