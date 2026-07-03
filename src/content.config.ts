import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolioCollection = defineCollection({
  loader: glob({ base: './src/content/portfolio', pattern: '**/*.md' }),
  schema: z.any(),
});

export const collections = {
  portfolio: portfolioCollection,
};
