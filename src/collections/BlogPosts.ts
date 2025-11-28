import { CollectionConfig } from 'payload'

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  label: 'Blog Posts',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Excerpt',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
    },
    {
      name: 'keyTakeaways',
      type: 'array',
      label: 'Key Takeaways',
      fields: [
        {
          name: 'takeaway',
          type: 'text',
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Published Date',
    },
    {
      name: 'author',
      type: 'text',
      label: 'Author',
    },
  ],
}
