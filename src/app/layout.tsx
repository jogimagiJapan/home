import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans, Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jp",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "SEW THE SOUND — jõgi mägi",
  description: "記憶を纏う、音の刺繍。声という指紋を、一生モノのアートに。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${instrumentSans.variable} ${notoSansJP.variable} ${geistMono.variable} bg-paper text-ink antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
