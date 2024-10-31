import type { CollectionConfig } from 'payload';

import { anyone } from '@/payload/access/anyone';
import { authenticated } from '@/payload/access/authenticated';

const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated
  },
  admin: {
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    }
  ]
};

export default Categories;
