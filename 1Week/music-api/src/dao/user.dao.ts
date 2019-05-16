import {PoolClient} from 'pg';
import { connectionPool } from '.';
import { sqlUserToJsUser } from '../util/user-converter';

// we are allowing getAllUsers to be added to our c++ apis
export async function getAllUsers() {
    let client: PoolClient;
    // This connection might take some time to be made
    // We do it asychronously

    // We will get a Promise
    try{
        client = await connectionPool.connect(); // await says await for the promise to resolve
        // all code beneath the await will become a callback after the await is done
        let result = await client.query('SELECT * FROM "music_api".users;');
        return result.rows.map(sqlUserToJsUser);
    } catch(err) {
        console.log(err);
        return 'Internal Server Error';
    } finally {
        client && client.release();
    }
}

export async function getUserById(id: number) {
    let client: PoolClient;

    try {
        client = await connectionPool.connect();

        let result = await client.query('SELECT * FROM "music_api".users WHERE user_id=$1', [id]);
        return sqlUserToJsUser(result.rows[0]);
    } catch(err) {
        console.log(err);
        return 'Internal Server Error';
    } finally {
        client && client.release();
    }
}

export async function getUserByLogin(username: string, user_pass: string) {
    let client: PoolClient;

    try {
        client = await connectionPool.connect();

        console.log(username, user_pass);

        let result = await client.query('SELECT * FROM "music_api".users WHERE username=$1 AND user_pass=$2', [username, user_pass]);
        console.log(result.rows);
        return result.rows.map(sqlUserToJsUser);
    } catch(err) {
        console.log(err);
        return 'Internal Server Error'
    } finally {
        client && client.release();
    }
}

export async function findUserByUsernameAndPassword(username: string, password: string) {
    let client: PoolClient;

    try {
        client = await connectionPool.connect();
        let query = 'SELECT * FROM "music_api".users WHERE username=$1 AND user_pass=$2';
        let result = await client.query(query, [username, password]);
        if (!result.rows[0]) {
            return 'User not found';
        }
        return sqlUserToJsUser(result.rows[0]);
    } catch(err) {
        console.log(err);
        return 'Internal Server Error';
    } finally {
        client && client.release();
    }
}