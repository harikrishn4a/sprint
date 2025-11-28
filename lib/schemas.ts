import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  durationWeeks: z.number().int().positive(),
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;
