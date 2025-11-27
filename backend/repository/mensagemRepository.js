const pool = require('../db/connection');

class MensagemRepository {
  async criarMensagem(mensagem) {
    const query = `
      INSERT INTO Mensagem (usuario_id, tipoProblema, descricao)
      VALUES ($1, $2, $3)
      RETURNING id, dataEnvio
    `;
    const values = [mensagem.usuarioId, mensagem.tipoProblema, mensagem.descricao];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async listarMensagens() {
    const query = `
      SELECT m.id, m.usuario_id, u.nome AS usuario_nome, m.tipoProblema, m.descricao, m.dataEnvio
      FROM Mensagem m
      LEFT JOIN Usuario u ON m.usuario_id = u.id
      ORDER BY m.dataEnvio DESC
    `;
    const { rows } = await pool.query(query);
    return rows;
  }

  async buscarPorId(id) {
    const query = `
      SELECT m.id, m.usuario_id, u.nome AS usuario_nome, m.tipoProblema, m.descricao, m.dataEnvio
      FROM Mensagem m
      LEFT JOIN Usuario u ON m.usuario_id = u.id
      WHERE m.id = $1
    `;
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }
}

module.exports = new MensagemRepository();
