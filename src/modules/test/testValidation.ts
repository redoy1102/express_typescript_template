import { z } from 'zod';

export const testValidation = z.object({
  name: z.string().min(1, 'Name is required'),
});
