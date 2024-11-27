import { z } from "zod";

const schema = z.object({
  id: z.number(),
  created_at: z.date(),
  name: z.string().min(1),
  maxCapacity: z.number().int().positive().optional(),
  regularPrice: z.number().positive().optional(),
  discount: z.number().min(0).max(100).optional(),
  description: z.string().optional(),
  image: z.string().optional().nullable(),
});

export default schema;
