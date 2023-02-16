import { createPool, Pool } from 'mysql2';

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'node_mysql_ts',
        connectionLimit: 10
    });
    return connection;
}