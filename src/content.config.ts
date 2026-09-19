import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			researchTitle: z.string().optional(),
			researchNote: z.string().optional(),
			researchCitation: z.string().optional(),
			researchUrl: z.string().optional(),
		}),
});

const home = defineCollection({
	// One entry per locale: src/content/home/fr.yaml, src/content/home/en.yaml
	loader: glob({ base: './src/content/home', pattern: '*.yaml' }),
	schema: ({ image }) =>
		z.object({
			heroTitle: z.string(),
			introDescription: z.string(),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog, home };
