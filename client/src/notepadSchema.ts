import { z } from "zod";

const title = z
  .string()
  .min(4, {
    message: "O título precisa ter pelo menos 4 caracteres",
  })
  .max(16, {
    message: "O título precisa ter pelo menos 16 caracteres",
  });

const subtitle = z
  .string()
  .min(8, {
    message: "O título precisa ter pelo menos 8 caracteres",
  })
  .max(24, {
    message: "O título precisa ter pelo menos 24 caracteres",
  });

const content = z
  .string()
  .min(16, {
    message: "O título precisa ter pelo menos 16 caracteres",
  })
  .max(140, {
    message: "O título precisa ter pelo menos 140 caracteres",
  });

export const NotepadSchema = z.object({
  title,
  subtitle,
  content,
});
