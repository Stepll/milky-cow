'use strict';

const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.1',
  port: 3000,
  database: 'application',
  user: 'stepll',
  password: 'stepan2000',
});

const fields = ['schemaname', 'tablename', 'tableowner'].join(', ');
const sql = `SELECT ${fields} FROM pg_tables WHERE tableowner = $1`;
pool.query(sql, ['stepll'], (err, res) => {
  if (err) {
    throw err;
  }
  console.dir({ res });
  console.table(res.fields);
  console.table(res.rows);
  console.table(res.rows.systemgroup);
  pool.end();
});