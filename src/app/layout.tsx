import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import SmoothPage from "./_components/SmoothPage";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "XCMG Nepal",
  description: "XCMG Nepal construction machinery website",
  icons: {
    icon: "/icon.png?v=20260406-2",
    shortcut: "/icon.png?v=20260406-2",
    apple: "/icon.png?v=20260406-2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-[#0f172a]">
        <SmoothPage>{children}</SmoothPage>
      </body>
         <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XFR8ND9V1J" } />
    </html>
  );
}
