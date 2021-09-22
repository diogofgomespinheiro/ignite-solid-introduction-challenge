export const showUserProfilePath = {
  get: {
    tags: ["User"],
    summary: "Show user profile",
    description: "Get user profile from it's ID.",
    parameters: [
      {
        in: "path",
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
              $ref: "#/schemas/user",
            },
          },
        },
      },
      404: {
        $ref: "#/components/notFound",
      },
    },
  },
};
