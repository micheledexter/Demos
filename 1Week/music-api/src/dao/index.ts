import {Pool} from 'pg';
require('dotenv').config();

// We are going to use a connection pool to help us manage our connections to the db
// we do this because making new connections is very expensive (takes a long time)
// so we configure the pool to make all the connections right away then share them
// in use, we will ask the pool for a connection and when we are done we will close

// use environment variables
const env = process.env;

export const connectionPool = new Pool({
    user: env.MUSIC_API_USERNAME,
    host: env.MUSIC_API_HOST,
    database: env.MUSIC_API_DB_NAME,
    password: env.MUSIC_API_PASSWORD,
    port: env.MUSIC_API_PORT,
    max: 5 // max number of connections
});