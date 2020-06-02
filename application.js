'use strict';

const db = require('./db.js');

const pg = db.open({
  host: '127.0.0.1',
  port: 3000,
  database: 'application',
  user: 'stepll',
  password: 'stepan2000',
});

console.dir({ pg });

pg.select('pg_tables')
  .where({ tableowner: 'stepll', schemaname: 'public' })
  .fields(['schemaname', 'tablename', 'tableowner', 'hasindexes'])
  .order('tablename')
  .then(rows => {
    console.table(rows);
    pg.close();
  });