const pool = require('../db/connection');

class RelatorioRepository {
  // Busca dados agregados para o relatório
  async gerarSemestral(dataInicio, dataFim) {
    const query = `
      SELECT 
        u.id AS usuario_id,
        u.nome,
        COUNT(ca.id) AS frequencia,
        SUM(p.valor * (1 - COALESCE(p.descontoAplicado,0)/100)) AS gastoTotal
      FROM Usuario u
      LEFT JOIN ControleAcesso ca
        ON u.id = ca.usuario_id AND ca.dataHora BETWEEN $1 AND $2
      LEFT JOIN Plano p
        ON u.plano_id = p.id
      GROUP BY u.id, u.nome
      ORDER BY u.nome
    `;
    const values = [dataInicio, dataFim];
    const { rows } = await pool.query(query, values);
    return rows;
  }
}

module.exports = new RelatorioRepository();
