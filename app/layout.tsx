import Navbar from 'components/layout/navbar';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;

export const metadata = {
  title: {
    default: SITE_NAME || 'eppus',
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(TWITTER_CREATOR &&
    TWITTER_SITE && {
      twitter: {
        card: 'summary_large_image',
        creator: TWITTER_CREATOR,
        site: TWITTER_SITE
      }
    })
};

const myFont = localFont({
  src: '../public/cooper.ttf',
  display: 'swap'
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
