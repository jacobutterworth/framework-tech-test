import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/NavBar";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JB dot com",
  description: "JB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-white-100 md:px-28 px-5")}>
        <Navbar /> {children}
      </body>
    </html>
  );
}
