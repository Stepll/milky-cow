'use strict';

const db = require('./db.js');

const pg = db.open({
  host: '127.0.0.1',
  port: 3000,
  database: 'shop',
  user: 'postgres',
  password: '1234567895',
});

//console.dir({ pg });

// pg.select('pg_tables')
//   .where({ tableowner: 'stepll', schemaname: 'public' })
//   .fields(['schemaname', 'tablename', 'tableowner', 'hasindexes'])
//   .order('tablename')
//   .then(rows => {
//     console.table(rows);
//     pg.close();
//   });

pg.select('customer')
  .join('cart', 'id', 'customer_id', 'RIGHT')
  .then(rows => {
    console.table(rows);
    //pg.close();
  });

pg.select('customer')
  .createIndex('name', true)
  .using('BTREE')
  //.collate('de_DE')
  .then(rows => {
    console.table(rows);
    //pg.close();
  });


  pg.all_fk()
    .then(rows => {
      console.table(rows);
      pg.close();
    });

