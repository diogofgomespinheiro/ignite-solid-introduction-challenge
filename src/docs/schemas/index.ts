import { errorSchema } from "./errorSchema";
import { createUserParamsSchema, userSchema, usersSchema } from "./users";

export default {
  user: userSchema,
  users: usersSchema,
  createUserParams: createUserParamsSchema,
  error: errorSchema,
};
