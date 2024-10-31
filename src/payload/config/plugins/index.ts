import { Config } from 'payload';

import { formBuilderPlugin } from './formBuilder';
import { nestedDocsPlugin } from './nestedDocs';
import { redirectsPlugin } from './redirect';
import { searchPlugin } from './searchPlugin';
import { seoPlugin } from './seo';

export const plugins: Config['plugins'] = [
  redirectsPlugin,
  nestedDocsPlugin,
  seoPlugin,
  formBuilderPlugin,
  searchPlugin
];
