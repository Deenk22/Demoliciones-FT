import {z} from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const mailSchema = z.object({
  name: z.string(),
  email: z.string().email("Introduce un email válido"),
  phone: z
    .string()
    .max(15, "Solo 15 dígitos como máximo")
    .regex(phoneRegex, "Introduce un número válido"),
  mensaje: z.string(),
});
