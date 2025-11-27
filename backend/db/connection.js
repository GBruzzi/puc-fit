const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',      
  password: 'senha',     
  database: 'pucfit',
  port: 5432,            
  max: 10,               
  idleTimeoutMillis: 30000
});


pool.connect()
  .then(client => {
    console.log('Conectado ao PostgreSQL');
    client.release();
  })
  .catch(err => console.error('Erro ao conectar no PostgreSQL', err));

module.exports = pool;
