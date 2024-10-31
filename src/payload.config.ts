import { buildConfig } from 'payload';
import sharp from 'sharp';

import { Footer } from './components/Footer/config';
import { Header } from './components/Header/config';
import Categories from './payload/collections/Categories';
import { Media } from './payload/collections/Media';
import { Pages } from './payload/collections/Pages';
import { Posts } from './payload/collections/Posts';
import { Users } from './payload/collections/Users';
import { admin } from './payload/config/admin';
import { db } from './payload/config/db';
import { editor } from './payload/config/editor';
import { plugins } from './payload/config/plugins';
import { typescript } from './payload/config/typescript';

export default buildConfig({
  admin,
  editor,
  db,
  collections: [Pages, Posts, Media, Categories, Users],
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  globals: [Header, Footer],
  plugins,
  secret: process.env.PAYLOAD_SECRET!,
  sharp,
  typescript
});
