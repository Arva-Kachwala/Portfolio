import type { Metadata } from "next";
import "./globals.css";
import Navbar from "app/components/Navbar";
import { siteMetadata } from "app/data/siteMetadata";
import { Footer } from "./components/Footer";
import { BgGradient } from "./components/BgGradient";
import { cx } from "./lib/utils";
import localFont from "next/font/local";
import { ThemeProvider } from "./components/ThemeProvider";
import Script from "next/script";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: "/braydon_coyer_blogfolio_og.jpg",
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ["/braydon_coyer_blogfolio_og.jpg"],
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
      className={`bg-bg-primary dark:bg-slate-950 ${satoshi.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme') || 'light';
                if (theme === 'dark') document.documentElement.classList.add('dark');
              })();
            `,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans transition-colors dark:text-slate-100 md:max-w-7xl lg:mx-auto lg:flex-row">
        <ThemeProvider>
          <main
            className={cx(
              "relative flex flex-1 flex-col overflow-x-hidden border-x border-border-primary/50 dark:border-slate-700/50",
            )}
          >
            <Navbar />
            <div className="grid flex-1 grid-cols-1 lg:grid-cols-[32px_1fr_32px]">
              <div className="hidden w-full border-r border-border-primary opacity-75 dark:border-slate-700 dark:opacity-30 [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px] lg:block"></div>
              <div className="relative col-span-1 px-3 lg:px-0">
                <BgGradient />
                {children}
              </div>
              <div className="hidden w-full border-l border-border-primary opacity-75 dark:border-slate-700 dark:opacity-30 [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px] lg:block"></div>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>

      <Script id="vemetric-loader" strategy="afterInteractive">
        {`
          window.vmtrcq = window.vmtrcq || [];
          window.vmtrc = window.vmtrc || ((...args) => window.vmtrcq.push(args));
        `}
      </Script>

      <Script
        src="https://cdn.vemetric.com/main.js"
        data-token="HUO9AbX53v2wkzRu"
        strategy="afterInteractive"
      />
    </html>
  );
}
