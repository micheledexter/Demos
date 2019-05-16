import { User } from "../models/user";
import { UserDTO } from "../dtos/user.dto";

export function sqlUserToJsUser(sqlUser: UserDTO): User {
    return new User(sqlUser.username, sqlUser.user_pass, null, sqlUser.user_id, sqlUser.roles.split(','));
}