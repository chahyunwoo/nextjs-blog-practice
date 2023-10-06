import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `Chahyunwoo's Blog`,
    template: `Chahyunwoo's Blog | %s`,
  },
  description: "웹 프론트엔드 개발자 차현우의 블로그",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${sans.className} flex flex-col`}>
        <Header />
        <main className="grow w-full max-w-screen-2xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
