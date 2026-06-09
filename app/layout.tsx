import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { personalInfo } from "@/lib/resume-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: personalInfo.summary,
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.summary,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.summary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
