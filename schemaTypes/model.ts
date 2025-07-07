import {defineField, defineType, Rule} from 'sanity'

const languages = [
  {id: 'uk', title: 'Українська'},
  {id: 'en', title: 'English'},
]

export default defineType({
  name: 'model',
  title: 'Model',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Імʼя моделі',
      type: 'object',
      validation: (rule) => rule.required(),
      fields: languages.map((lang) => ({
        title: lang.title,
        name: lang.id,
        type: 'string',
        validation: (rule: Rule) => rule.required(),
      })),
    }),
    defineField({
      name: 'slug',
      title: 'Слаг - посилання, яке буде відображатися на сторінці моделі',
      type: 'slug',
      options: {
        source: 'name.uk',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    // Мультимовні параметри
    defineField({
      name: 'height',
      title: 'Зріст в сантиметрах',
      type: 'object',
      validation: (rule) => rule.required(),
      fields: languages.map((lang) => ({
        name: lang.id,
        title: lang.title,
        type: 'string',
        validation: (rule: Rule) => rule.required(),
      })),
    }),
    defineField({
      name: 'bust',
      title: "Об'єм грудей в сантиметрах",
      type: 'object',
      validation: (rule) => rule.required(),
      fields: languages.map((lang) => ({
        name: lang.id,
        title: lang.title,
        type: 'string',
        validation: (rule: Rule) => rule.required(),
      })),
    }),
    defineField({
      name: 'waist',
      title: "Об'єм талії в сантиметрах",
      type: 'object',
      validation: (rule) => rule.required(),
      fields: languages.map((lang) => ({
        name: lang.id,
        title: lang.title,
        type: 'string',
        validation: (rule: Rule) => rule.required(),
      })),
    }),
    defineField({
      name: 'hips',
      title: "Об'єм стегон в сантиметрах",
      type: 'object',
      validation: (rule) => rule.required(),
      fields: languages.map((lang) => ({
        name: lang.id,
        title: lang.title,
        type: 'string',
        validation: (rule: Rule) => rule.required(),
      })),
    }),
    defineField({
      name: 'shoes',
      title: 'Розмір взуття (EU)',
      type: 'object',
      validation: (rule) => rule.required(),
      fields: languages.map((lang) => ({
        name: lang.id,
        title: lang.title,
        type: 'string',
        validation: (rule: Rule) => rule.required(),
      })),
    }),

    // Волосся, очі
    defineField({
      name: 'hair',
      title: 'Колір волосся',
      type: 'object',
      validation: (rule) => rule.required(),
      fields: languages.map((lang) => ({
        title: lang.title,
        name: lang.id,
        type: 'string',
        validation: (rule: Rule) => rule.required(),
      })),
    }),
    defineField({
      name: 'eyes',
      title: 'Колір очей',
      type: 'object',
      validation: (rule) => rule.required(),
      fields: languages.map((lang) => ({
        title: lang.title,
        name: lang.id,
        type: 'string',
        validation: (rule: Rule) => rule.required(),
      })),
    }),

    defineField({
      name: 'instagram',
      title: 'Посилання на instagram',
      type: 'url',
      validation: (rule) => rule.required().uri({scheme: ['https']}),
    }),

    defineField({
      name: 'mainPhoto',
      title: 'Головне фото (відображається на сторінці всіх моделей)',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alt текст',
          type: 'string',
        },
      ],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'gallery',
      title: 'Галерея фото',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Alt текст',
              type: 'string',
            },
          ],
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),

    defineField({
      name: 'polaroids',
      title: 'Polaroids',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Alt текст',
              type: 'string',
            },
          ],
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'name.uk',
      media: 'mainPhoto',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title,
        media,
      }
    },
  },
})
