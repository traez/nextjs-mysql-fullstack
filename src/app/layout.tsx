import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nextjs MySQL Fullstack",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
