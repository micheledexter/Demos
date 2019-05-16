import { getAllUsers, getUserById, getUserByLogin, findUserByUsernameAndPassword } from "../dao/user.dao";
import { Request } from "express-serve-static-core";

// This will have all the business logic for getAllUsers
export async function getAllUsersService() {
    // send email to big boss someone asked for all users
    // write to specific log file about it
    return await getAllUsers();
}

export async function getUserByIdService(id: number) {
    return await getUserById(id);
}

export async function findUserByUsernameAndPasswordService(req: Request, username: string, password: string) {
    let user = await findUserByUsernameAndPassword(username, password);
    if (typeof(user) === 'string') { // if it's an error, pass it up the line
        return user;
    } else {
        req.session.user = user;
        return user;
    }
}

export async function getUserByLoginService(username: string, user_pass: string) {
    return await getUserByLogin(username, user_pass);
}