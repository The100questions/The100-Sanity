
import {defineField, defineType} from 'sanity'

export const questionType = defineType({

    name: "question",
    title: "Question Detail",
    type: "document",
    fields: [
      defineField({
        name: "title",
        title: "title",
        type: "string",
      }),
      defineField({
        name: "subTitle",
        title: "subTitle",
        type: "string",
      }),
      defineField({
        name: "image",
        title: "image",
        type: "image",
      }),
      defineField({
        name: "content",
        title: "content",
        type: "string",
      }),
      defineField({
        name: "createdAt",
        title: "createdAt",
        type: "datetime",
      }),
      defineField({
        name: "modifiedAt",
        title: "modifiedAt",
        type: "datetime",
      }),
    ],
  
    preview: {
      select: {
        title: "title",
        subTitle: "subTitle",
        image: "image"
      },
    },
  });
  

