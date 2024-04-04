import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import NextAuthSessionProvider from "./provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <NextAuthSessionProvider>
          <div className="mx-2 md:mx-6">
            <Toaster />
            <Header />
            {children}
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
