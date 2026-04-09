export const validate = (schema) => {
  return (req, res, next) => {
    console.log("Данные приняты");
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res
        .status(400)
        .json({ message: `Помилка валідації ${result.error.format()}` });
    }

    req.body = result.data;

    console.log("Данные переданы в контроллер");
    next();
  };
};
