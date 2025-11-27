const relatorioRepo = require('../repositories/relatorioRepository');

class RelatorioService {
  async gerarRelatorioSemestral(dataInicio, dataFim) {
    const dados = await relatorioRepo.gerarSemestral(dataInicio, dataFim);
    return dados.map(item => ({
      usuarioId: item.usuario_id,
      nome: item.nome,
      frequencia: parseInt(item.frequencia),
      gastoTotal: parseFloat(item.gastototal)
    }));
  }
}

module.exports = new RelatorioService();
