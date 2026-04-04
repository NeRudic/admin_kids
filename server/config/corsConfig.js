export const corsConfig = {
  origin: process.env.ALLOWED_ORIGIN.split(","),
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
