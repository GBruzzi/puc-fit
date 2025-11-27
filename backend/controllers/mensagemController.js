const mensagemService = require('../services/mensagemService');

class MensagemController {
  async criar(req, res) {
    try {
      const mensagem = req.body;
      if (!mensagem.usuarioId || !mensagem.tipoProblema || !mensagem.descricao) {
        return res.status(400).json({ error: 'usuarioId, tipoProblema e descricao são obrigatórios' });
      }

      const novaMensagem = await mensagemService.criarMensagem(mensagem);
      res.status(201).json(novaMensagem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async listar(req, res) {
    try {
      const mensagens = await mensagemService.listarMensagens();
      res.json(mensagens);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async buscar(req, res) {
    try {
      const mensagem = await mensagemService.buscarMensagem(req.params.id);
      res.json(mensagemService.info(mensagem));
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

module.exports = new MensagemController();
