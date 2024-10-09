import type { Metadata } from "next";
import "./globals.css";
import Header from "./shared/components/header/page";
import Footer from "./shared/components/footer/page";

export const metadata: Metadata = {
  title: "Beer Blog",
  description: "All about beer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
