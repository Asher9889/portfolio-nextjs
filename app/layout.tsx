import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import { myInfo } from "@/constants/home.constant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saurabh Kushwaha - Full Stack Engineer",
  description: myInfo.description,
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var key='portfolio-theme';var saved=localStorage.getItem(key);var systemDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var isDark=saved?saved==='dark':systemDark;document.documentElement.classList.toggle('dark',isDark);document.documentElement.style.colorScheme=isDark?'dark':'light';}catch(e){}})();`,
          }}
        /> */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        try {
          var key = 'portfolio-theme';
          var saved = localStorage.getItem(key);
          var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          var isDark = saved ? saved === 'dark' : systemDark;

          var root = document.documentElement;
          root.classList.toggle('dark', isDark);
          root.style.colorScheme = isDark ? 'dark' : 'light';
        } catch (e) {}
      })();
    `,
          }}
        />

        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="portfolio" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-full flex flex-col">
          {/* <Navigation /> */}
        {children}
        </body>
    </html>
  );
}
