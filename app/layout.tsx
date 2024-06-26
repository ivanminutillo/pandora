import type { Metadata } from "next";
import Wrapper from "@/components/wrapper";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
      <Wrapper
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>
            {children}
            <Footer />
          </main>
        </Wrapper>
        <Toaster />
      </body>
    </html>
  );
}
