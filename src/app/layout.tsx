import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const NotoThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Tammarat-portfolio",
  description:
    "พอร์ตโฟลิโอของ ธรรมรัตน์ มนตรี (Tammarat Montri) นักพัฒนา Internal System และ Full Stack Developer ที่มีประสบการณ์พัฒนา Web Application และเชื่อมต่อระบบ ERP ภายในองค์กร",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="dark">
      <body className={`${NotoThai.variable} antialiased`}>{children}</body>
    </html>
  );
}
