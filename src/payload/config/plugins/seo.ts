import { seoPlugin as plugin } from '@payloadcms/plugin-seo';
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types';

import { Page, Post } from '@/payload-types';

const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
  return doc?.title
    ? `${doc.title} | Payload Website Template`
    : 'Payload Website Template';
};

const generateURL: GenerateURL<Post | Page> = ({ doc }) => {
  return doc?.slug
    ? `${process.env.NEXT_PUBLIC_SERVER_URL!}/${doc.slug}`
    : process.env.NEXT_PUBLIC_SERVER_URL!;
};

export const seoPlugin = plugin({
  generateTitle,
  generateURL
});
