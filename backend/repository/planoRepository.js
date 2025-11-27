const pool = require('../db/connection');

class PlanoRepository {
  async create(plano) {
    const query = `
      INSERT INTO Plano (tipo, valor, dataInicio, dataFim, descontoAplicado)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id
    `;
    const values = [
      plano.tipo,
      plano.valor,
      plano.dataInicio,
      plano.dataFim,
      plano.descontoAplicado || 0
    ];
    const { rows } = await pool.query(query, values);
    return rows[0].id;
  }

  async findById(id) {
    const { rows } = await pool.query('SELECT * FROM Plano WHERE id = $1', [id]);
    return rows[0];
  }

  async findAll() {
    const { rows } = await pool.query('SELECT * FROM Plano');
    return rows;
  }

  async update(id, plano) {
    const query = `
      UPDATE Plano
      SET tipo=$1, valor=$2, dataInicio=$3, dataFim=$4, descontoAplicado=$5
      WHERE id=$6
    `;
    const values = [
      plano.tipo,
      plano.valor,
      plano.dataInicio,
      plano.dataFim,
      plano.descontoAplicado || 0,
      id
    ];
    await pool.query(query, values);
  }

  async delete(id) {
    await pool.query('DELETE FROM Plano WHERE id = $1', [id]);
  }
}

module.exports = new PlanoRepository();
