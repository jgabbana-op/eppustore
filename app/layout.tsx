import Navbar from 'components/layout/navbar';
import localFont from 'next/font/local';
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
      <body>
        <div className="flex min-h-screen flex-col overflow-hidden">
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
