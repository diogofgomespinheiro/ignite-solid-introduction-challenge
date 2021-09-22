export const createUserParamsSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      example: "Test User",
    },
    email: {
      type: "string",
      format: "email",
    },
  },
  required: ["name", "email"],
};
