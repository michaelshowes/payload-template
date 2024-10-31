import { searchPlugin as plugin } from '@payloadcms/plugin-search';

import { beforeSyncWithSearch } from '@/payload/search/beforeSync';
import { searchFields } from '@/payload/search/fieldOverrides';

export const searchPlugin = plugin({
  collections: ['posts'],
  beforeSync: beforeSyncWithSearch,
  searchOverrides: {
    fields: ({ defaultFields }) => {
      return [...defaultFields, ...searchFields];
    }
  }
});
