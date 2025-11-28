import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  label: 'Media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*', 'application/pdf'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
    },
  ],
}
