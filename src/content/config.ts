// @ts-ignore
import { defineCollection, z } from "astro:content";

const realizations = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    mainImage: z.string(),
    images: z.array(z.string()),
    date: z.date(),
  }),
});

const banners = defineCollection({
  schema: z.object({
    title: z.string(),
    bannerImage: z.string(),
  }),
});

export const collections = { realizations, banners };
