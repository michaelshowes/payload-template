import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import React from 'react';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { Footer } from '@/components/Footer/Component';
import { Header } from '@/components/Header/Component';
import { cn } from '@/lib/utils';
import { AdminBar } from '@/payload/components/AdminBar';
import { LivePreviewListener } from '@/payload/components/LivePreviewListener';
import { mergeOpenGraph } from '@/payload/utilities/mergeOpenGraph';
import { Providers } from '@/providers';
import { InitTheme } from '@/providers/Theme/InitTheme';

import './globals.css';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang='en'
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link
          href='/favicon.ico'
          rel='icon'
          sizes='32x32'
        />
        <link
          href='/favicon.svg'
          rel='icon'
          type='image/svg+xml'
        />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled
            }}
          />
          <LivePreviewListener />

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'
  ),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms'
  }
};
