import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "OSCode BMSCE | Coding Community",
  description: "OSCode is the premier coding community of BMSCE focused on development, hackathons, AI, open source, and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#0B0F19] text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
