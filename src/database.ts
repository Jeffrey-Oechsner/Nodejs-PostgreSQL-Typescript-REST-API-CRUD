import { Pool } from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'dra9923hejd99',
    database: 'firstapi',
    port: 5432
});