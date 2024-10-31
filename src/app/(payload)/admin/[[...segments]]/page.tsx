/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */

/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import config from '@payload-config';
import { RootPage, generatePageMetadata } from '@payloadcms/next/views';

import { getCurrentUser } from '@/db/queries/users';

import { importMap } from '../importMap';

type Args = {
  params: Promise<{
    segments: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[];
  }>;
};

export const generateMetadata = ({
  params,
  searchParams
}: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams });

const Page = async ({ params, searchParams }: Args) => {
  const user = await getCurrentUser();

  if (!user) {
    return redirect('/admin/login');
  }

  return RootPage({ config, params, searchParams, importMap });
};

export default Page;
