import { z } from 'zod'

export const PrimarySchema = z.object({
  name: z.string().min(4, 'Real Name is required.'),
  type: z.enum(['male', 'female']),
  condition: z.enum(['unmarried', 'married', 'divorced']),
  education: z.enum(['General', 'Madrasha'])
})

export type TPrimary = z.infer<typeof PrimarySchema>
