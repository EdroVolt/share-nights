import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/common/fonts";

export const metadata: Metadata = {
  title: "Share Nights",
  description: "Share your nights with your beloved ones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mode="dark">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
