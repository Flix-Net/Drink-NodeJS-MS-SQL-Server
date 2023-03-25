
import dotenv from 'dotenv';
import assert from "assert";

dotenv.config();

const {PORT, HOST, HOST_URL, DB_USER, DB_PASSWORD, DB_NAME, SERVER_NAME} = process.env;

const sqlEncrypt = process.env.DB_ENCRYPT === "true";

assert(PORT, 'PORT is require');
assert(HOST, 'HOST is required');

const config = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SERVER_NAME,
        database: DB_NAME,
        user: DB_USER,
        password: DB_PASSWORD,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        }
    }
}

export default config;