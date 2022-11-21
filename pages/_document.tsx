import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/site.webmanifest" rel="manifest" />
        <meta content="#ffffff" name="theme-color" />
        <meta name="google-site-verification" content="Gu06v3QxgyAEa-Of4Y4h8mWzgCoTZTYWv1tZDuPofP4" />
      </Head>
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
