import {defineCollection} from 'astro:content';
import {glob} from 'astro/loaders'; // Not available with legacy API
import {lessonContentSchema} from './lesson-schema';

const lessons = defineCollection({
  loader: glob({pattern: '**/*.{md,mdx}', base: './src/lessons'}),
  schema: lessonContentSchema,
});

export const collections = {lessons};
