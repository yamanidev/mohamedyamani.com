import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      image: z.string().optional(),
      imageAlt: z.string().optional()
    })
    .refine((data) => {
      if (data.image && !data.imageAlt) {
        throw new Error("Missing alt property for image");
      }
      return true;
    })
});

export const collections = { blog };
