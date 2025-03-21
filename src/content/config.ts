import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    thumbnail: z.object({
      url: z.string(),
      alt: z.string(),
      creditText: z.string().optional(),
      creditLink: z.string().url().optional()
    }),
    tags: z.array(z.string())
  })
});

export const collections = { blog };
