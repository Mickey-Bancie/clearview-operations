import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clearview Operations | Operational Clarity That Drives Results",

  description:
    "Clearview Operations helps businesses improve operations, customer experience, project execution, and UX-informed process clarity.",

  keywords: [
    "Operations Consulting",
    "Customer Experience",
    "UX-Informed Consulting",
    "Process Improvement",
    "Project Management",
    "Small Business Consulting",
    "Operational Clarity",
  ],

  openGraph: {
    title: "Clearview Operations",

    description:
      "Helping businesses operate with clarity through operations consulting, customer experience strategy, and UX-informed process improvement.",

    url: "https://clearviewops.tech",

    siteName: "Clearview Operations",

    images: [
      {
        url: "https://clearviewops.tech/logo.png",
        width: 1200,
        height: 630,
        alt: "Clearview Operations",
      },
    ],

    locale: "en_US",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
         <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-LSCLMHJWWG"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-LSCLMHJWWG');
    `}
  </Script>
      </body>
    </html>
  );
}