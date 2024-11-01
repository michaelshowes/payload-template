/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */

/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import React from 'react';

import configPromise from '@payload-config';
import '@payloadcms/next/css';
import { RootLayout } from '@payloadcms/next/layouts';

import { importMap } from './admin/importMap';
import './custom.scss';

type Args = {
  children: React.ReactNode;
};

export default function Layout({ children }: Args) {
  return (
    <RootLayout
      importMap={importMap}
      config={configPromise}
    >
      {children}
    </RootLayout>
  );
}
