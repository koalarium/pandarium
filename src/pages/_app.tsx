import '../styles/globals.css'
import Script from 'next/script';
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-GCP5L4D1QK" strategy="afterInteractive" />
      <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GCP5L4D1QK');
          `,
          }}
      /> */}
      <Component {...pageProps} />
    </SessionProvider>
  )
}
