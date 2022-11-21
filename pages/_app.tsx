import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/* NOTE: https://nextjs.org/docs/messages/next-script-for-ga */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
     
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
