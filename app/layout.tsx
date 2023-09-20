import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar/navbar";
import ToastProvider from "@/providers/toastProvider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`bg-[#f5f0f0] ${urbanist.className} relative `}>
        <ToastProvider/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
