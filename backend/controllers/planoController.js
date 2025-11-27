const planoService = require('../services/planoService');

class PlanoController {
  async cadastrar(req, res) {
    try {
      const plano = req.body;
      const novoPlano = await planoService.cadastrarPlano(plano);
      res.status(201).json(novoPlano);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async listar(req, res) {
    try {
      const planos = await planoService.listarPlanos();
      res.json(planos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async buscar(req, res) {
    try {
      const plano = await planoService.buscarPlano(req.params.id);
      if (!plano) return res.status(404).json({ error: 'Plano não encontrado' });
      res.json(plano);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async atualizar(req, res) {
    try {
      const plano = await planoService.atualizarPlano(req.params.id, req.body);
      res.json(plano);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deletar(req, res) {
    try {
      await planoService.deletarPlano(req.params.id);
      res.json({ mensagem: 'Plano deletado com sucesso' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async aplicarDesconto(req, res) {
    try {
      const { percentual } = req.body;
      const resultado = await planoService.aplicarDesconto(req.params.id, percentual);
      res.json(resultado);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async removerDesconto(req, res) {
    try {
      const resultado = await planoService.removerDesconto(req.params.id);
      res.json(resultado);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new PlanoController();
