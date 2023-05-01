import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id="google-analytics-script" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}')
    `}
        </Script>
        <link href="/manifest.json" rel="manifest" />
        <meta
          name="google-site-verification"
          content="Uhww2QKuJ3OlDB1UcASC8NenarmXlZnVxiFIWR2B3pE"
        />
        <meta name="theme-color" content="dark:#1e293b" />
        <meta name="msapplication-navbutton-color" content="dark:#1e293b" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="dark:#1e293b"
        />
      </Head>
      <body className="bg-slate-300 dark:bg-slate-800 text-white dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
