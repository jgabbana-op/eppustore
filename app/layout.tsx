import Navbar from 'components/layout/navbar';
import localFont from 'next/font/local';
import Head from 'next/head';
import { ReactNode } from 'react';
import './globals.css';

const { SITE_NAME } = process.env;

export const metadata = {
  title: {
    default: SITE_NAME || 'eppus',
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  }
};

const myFont = localFont({
  src: '../public/cooper.ttf',
  display: 'swap'
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={myFont.className}>
      <Head>
        <link rel="preload" href="/eppuslogo.png" as="image" />
        <link rel="preload" href="/handsteak2.png" as="image" />
        <link rel="preload" href="/foodtruck.png" as="image" />
        <link rel="preload" href="/philpoint.png" as="image" />
        <link rel="preload" href="/philhide.png" as="image" />
        <link rel="preload" href="/eppuskarry.png" as="image" />
        <link rel="preload" href="/eppuskarrykiinni.png" as="image" />
      </Head>
      <body>
        <div className="flex min-h-screen flex-col overflow-hidden">
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
