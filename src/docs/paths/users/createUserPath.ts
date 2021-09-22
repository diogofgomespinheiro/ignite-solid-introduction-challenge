export const createUserPath = {
  post: {
    tags: ["User"],
    summary: "Create an user",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/createUserParams",
          },
        },
      },
    },
    responses: {
      201: {
        description: "Created",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/user",
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
