// THIS FILE IS AUTO-GENERATED from types.ts - DO NOT EDIT DIRECTLY
import z from 'zod';


// Schema generated from types.ts Car type
export const CarSchema = z.object({
  id: z.number().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  title: z.string({ required_error: "Title is required" }),
  category: z.string({ required_error: "Category is required" }),
  releaseYear: z.number(),
  brand: z.string(), // readonly in TypeScript
  doors: z.number(),
  price: z.number().optional(),
  fuelType: z.array(z.string()),
  nationality: z.string(),
  model: z.string(),
  horsepower: z.number().optional(),
  topSpeed: z.number().optional(),
  trasmissione: z.enum(["Automatico", "Manuale"], {
        errorMap: () => ({ message: "Invalid value for 'trasmissione'. Expected 'Automatico' or 'Manuale'" })
      }),
  video: z.string().optional(),
  logo: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
}).strict(); // Add strict mode to reject extra properties


export function validateCar(data) {
  try {
    const result = CarSchema.parse(data);
    return { valid: true, data: result };
  } catch (error) {
    return { 
      valid: false, 
      errors: error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }))
    };
  }
}

// Export all validators as a map for dynamic usage
export const validators = {
  "car": validateCar
};

// Export readonly properties for each type to prevent updates
export const readonlyProperties = {
  "car": ["title", "category", "brand"]
};
