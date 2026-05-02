import z from "zod";

export const FamilySchema = z.object({
  familyName: z.string().min(1, "Прізвище не може бути порожнім!"),

  adults: z
    .array(
      z.object({
        first_name: z.string().min(1, "Ім'я не може бути порожнім!"),
        phone: z
          .string()
          .regex(/^\+380\d{9}$/, "Неправильний формат телефону!"),
        roleId: z.number().min(1, "Роль не може бути порожньою!"),
      }),
    )
    .min(1, "Має бути хоча б 1 дорослий!"),

  children: z
    .array(
      z.object({
        first_name: z.string().min(1, "Ім'я не може бути порожнім!"),
        birthday: z
          .string()
          .regex(/^\d{2}\.\d{2}\.\d{4}$/, "Неправильний формат дати!"),
        roleId: z.number().min(1, "Роль не може бути порожньою!"),
      }),
    )
    .min(1, "Має бути хоча б 1 дитина!"),
});

export const FindFamilySchema = z.object({
  query: z.string().min(3, "Повинно бути хоча б 3 символи!"),
});
