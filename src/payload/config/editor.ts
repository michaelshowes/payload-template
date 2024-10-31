import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  UnderlineFeature,
  lexicalEditor
} from '@payloadcms/richtext-lexical';

export const editor = lexicalEditor({
  features: () => {
    return [
      UnderlineFeature(),
      BoldFeature(),
      ItalicFeature(),
      LinkFeature({
        enabledCollections: ['pages', 'posts'],
        fields: ({ defaultFields }) => {
          const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
            if ('name' in field && field.name === 'url') return false;
            return true;
          });

          return [
            ...defaultFieldsWithoutUrl,
            {
              name: 'url',
              type: 'text',
              admin: {
                condition: ({ linkType }) => linkType !== 'internal'
              },
              label: ({ t }) => t('fields:enterURL'),
              required: true
            }
          ];
        }
      })
    ];
  }
});
