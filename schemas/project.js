export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'date',
      type: 'datetime',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'projectType',
      title: 'Project type',
      type: 'string',
      options: {
        list: [
          {
            value: 'personal',
            title: 'Personal',
          },
          {
            value: 'client',
            title: 'Client',
          },
          {
            value: 'capstone',
            title: 'Capstone',
          },
        ],
      },
    },
    {
      name: 'webLink',
      title: 'Website Link',
      type: 'url',
    },
    {
      name: 'gitLink',
      title: 'Github Link',
      type: 'url',
    },
    {
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
  ],
}
