import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.NEXT_PUBLIC_POOL_HOST,
  user: process.env.NEXT_PUBLIC_POOL_USER,
  password: process.env.NEXT_PUBLIC_POOL_PASSWORD,
  database: process.env.NEXT_PUBLIC_POOL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;

/* 
This code creates a MySQL connection pool in Node.js using the mysql2/promise library, which supports async/await for managing database interactions. The createPool function sets up a pool of connections that the application can reuse instead of opening and closing new connections for each query. This approach improves performance by minimizing the overhead of establishing new connections, especially in applications with frequent database access.

The configuration specifies key details like the host (localhost), the MySQL user (root), password, and the database (zeeofordb). The pool allows up to 10 simultaneous connections, and additional requests will wait for a free connection when all are in use. With queueLimit set to 0, there’s no limit to how many requests can wait in the queue.

Finally, the pool is exported, making it reusable across other parts of the application for running database queries. Connection pooling helps optimize resource usage, improve scalability, and ensures the application performs efficiently under heavy loads.
*/