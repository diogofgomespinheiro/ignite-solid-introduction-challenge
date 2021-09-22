export const listAllUsersPath = {
  get: {
    tags: ["User"],
    summary: "List all users",
    description: "Only for **admin users**",
    parameters: [
      {
        in: "header",
        name: "user_id",
        description: "User Id",
        required: true,
        schema: {
          type: "string",
          format: "uuid",
        },
      },
    ],
    responses: {
      200: {
        description: "Success",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/users",
            },
          },
        },
      },
      400: {
        $ref: "#/components/badRequest",
      },
    },
  },
};
