export const turnUserAdminPath = {
  patch: {
    tags: ["User"],
    summary: "Turns an user admin",
    description:
      "Turns the current user into admin from it's user id and returns this user.",
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
