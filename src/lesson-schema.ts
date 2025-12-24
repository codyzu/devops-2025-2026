import {z} from 'astro:content';

export const lessonContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  availableFrom: z.coerce.date().optional(),
  published: z.boolean().default(true),
});

export const lessonDataSchema = z.object({
  id: z.string(),
  ...lessonContentSchema.shape,
});

export type LessonData = z.infer<typeof lessonDataSchema>;
