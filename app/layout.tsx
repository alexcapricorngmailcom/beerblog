import type { Metadata } from "next";
import "./globals.css";
import Header from "./shared/components/Header";
import ScrollToTopWarning from "./shared/components/ScrollToTopWarning";
import Footer from "./shared/components/Footer";

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
        <ScrollToTopWarning/>
        <Footer/>
      </body>
    </html>
  );
}
