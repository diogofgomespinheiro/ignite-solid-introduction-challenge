import { createUserPath } from "./createUserPath";
import { listAllUsersPath } from "./listAllUsersPath";
import { showUserProfilePath } from "./showUserProfilePath";
import { turnUserAdminPath } from "./turnUserAdminPath";

export default {
  "/users": {
    ...createUserPath,
    ...listAllUsersPath,
  },
  "/users/{user_id}": {
    ...showUserProfilePath,
  },
  "/users/{user_id}/admin": {
    ...turnUserAdminPath,
  },
};
