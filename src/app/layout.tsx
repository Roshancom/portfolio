import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roshan Neupane — Software Engineer & Frontend Specialist",
  description:
    "Software Engineer based in Nepal with 3+ years building scalable e-commerce and web applications with Next.js, React, and TypeScript for global brands.",
  keywords: [
    "Roshan Neupane",
    "Software Engineer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Nepal",
  ],
  openGraph: {
    title: "Roshan Neupane — Software Engineer",
    description:
      "Building scalable web experiences with Next.js for global brands.",
    type: "website",
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
      className={`${inter.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-screen mesh-gradient">{children}</body>
    </html>
  );
}
