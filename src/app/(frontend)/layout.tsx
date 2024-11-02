import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';

import './globals.css';

const inter = Inter({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Spencer & Williams',
  description: 'E-commerce store for Spencer & Williams'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={`${inter.className} antialiased`}>
        <Toaster />
        <div className={'max-w-[1600px] mx-auto flex flex-col gap-4'}>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
