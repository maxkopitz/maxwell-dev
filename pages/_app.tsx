import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Script from "next/script";

/* NOTE: https://nextjs.org/docs/messages/next-script-for-ga */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          page_path: window.location.pathname,
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
          });
    `}
      </Script>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
