import 'dotenv/config';
import { Pool } from 'pg';

const requiredEnv = (name: string): string => {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
};

export const pool = new Pool({
    user: requiredEnv('DB_USER'),
    host: requiredEnv('DB_HOST'),
    password: requiredEnv('DB_PASSWORD'),
    database: requiredEnv('DB_NAME'),
    port: Number(requiredEnv('DB_PORT'))
});