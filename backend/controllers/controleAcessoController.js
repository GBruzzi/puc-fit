const controleService = require('../services/controleAcessoService');

class ControleAcessoController {
  async registrar(req, res) {
    try {
      const { usuarioId } = req.body;
      if (!usuarioId) return res.status(400).json({ error: 'usuarioId é obrigatório' });

      const acesso = await controleService.registrarEntrada(usuarioId);
      res.status(201).json(acesso);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async listar(req, res) {
    try {
      const acessos = await controleService.listarAcessos();
      res.json(acessos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new ControleAcessoController();
