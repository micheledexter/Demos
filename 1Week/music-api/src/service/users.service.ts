import { getAllUsers, getUserById } from "../dao/user.dao";

// This will have all the business logic for getAllUsers
export async function getAllUsersService() {
    // send email to big boss someone asked for all users
    // write to specific log file about it
    return await getAllUsers();
}

export async function getUserByIdService(id: number) {
    return await getUserById(id);
}