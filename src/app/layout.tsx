import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

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
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
