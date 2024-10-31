import { Block } from 'payload';

export const SampleBlock: Block = {
  slug: 'sampleBlock',
  interfaceName: 'SampleBlock',
  imageURL: '/api/media/file/ilya-kuvshinov-lyd.jpg',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'description',
      type: 'textarea'
    }
  ]
};
