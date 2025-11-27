const relatorioService = require('../services/relatorioService');

class RelatorioController {
  async gerar(req, res) {
    try {
      const { dataInicio, dataFim } = req.query;
      if (!dataInicio || !dataFim) {
        return res.status(400).json({ error: 'dataInicio e dataFim são obrigatórios' });
      }

      const relatorio = await relatorioService.gerarRelatorioSemestral(dataInicio, dataFim);
      res.json(relatorio);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new RelatorioController();
