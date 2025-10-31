import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
});

export const metadata: Metadata = {
  title: "Future Ark Education - 未來方舟探險隊",
  description: "用 AI 開啟多元宇宙的無限可能",
  keywords: ["AI教育", "未來方舟", "太空探險", "人工智慧", "教學"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${notoSansTC.variable} antialiased bg-space-black text-star-white`}>
        {children}
      </body>
    </html>
  );
}
