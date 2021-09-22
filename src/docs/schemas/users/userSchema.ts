export const userSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      format: "uuid",
    },
    name: {
      type: "string",
      example: "Test User",
    },
    email: {
      type: "string",
      format: "email",
    },
    admin: {
      type: "boolean",
    },
    created_at: {
      type: "string",
      format: "date-time",
    },
    updated_at: {
      type: "string",
      format: "date-time",
    },
  },
};

export const usersSchema = {
  type: "array",
  items: {
    $ref: "#/schemas/user",
  },
};
