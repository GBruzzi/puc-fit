const pool = require('../db/connection');

class ControleAcessoRepository {
  async registrarEntrada(usuarioId) {
    const query = `
      INSERT INTO ControleAcesso (usuario_id)
      VALUES ($1)
      RETURNING id, dataHora
    `;
    const values = [usuarioId];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async listarAcessos() {
    const query = `
      SELECT ca.id, ca.usuario_id, u.nome AS usuario_nome, ca.dataHora
      FROM ControleAcesso ca
      LEFT JOIN Usuario u ON ca.usuario_id = u.id
      ORDER BY ca.dataHora DESC
    `;
    const { rows } = await pool.query(query);
    return rows;
  }
}

module.exports = new ControleAcessoRepository();
