export const validate = (schema) => {
  return (req, res, next) => {
    const dataForValidation =
      req.body && Object.keys(req.body).length > 0 ? req.body : req.query;

    const result = schema.safeParse(dataForValidation);

    if (!result.success) {
      console.log(result.error.format());
      return res.status(400).json({
        message: `Помилка валідації ${JSON.stringify(result.error.format(), null, 2)}`,
      });
    }

    req.body = result.data;

    next();
  };
};
