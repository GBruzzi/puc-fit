const usuarioService = require('../services/usuarioService');

class UsuarioController {
  async cadastrar(req, res) {
    try {
      const usuario = req.body;
      const novoUsuario = await usuarioService.cadastrarUsuario(usuario);
      res.status(201).json(novoUsuario);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async listar(req, res) {
    try {
      const usuarios = await usuarioService.listarUsuarios();
      res.json(usuarios);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async buscar(req, res) {
    try {
      const usuario = await usuarioService.buscarUsuario(req.params.id);
      if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });
      res.json(usuario);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async atualizar(req, res) {
    try {
      const usuario = await usuarioService.atualizarUsuario(req.params.id, req.body);
      res.json(usuario);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deletar(req, res) {
    try {
      await usuarioService.deletarUsuario(req.params.id);
      res.json({ mensagem: 'Usuário deletado com sucesso' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async aplicarDescontoAtleta(req, res) {
    try {
      const { percentual } = req.body;
      const resultado = await usuarioService.aplicarDescontoAtleta(req.params.id, percentual);
      res.json(resultado);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async atualizarStatusAtleta(req, res) {
    try {
      const { status } = req.body;
      const usuario = await usuarioService.atualizarStatusAtleta(req.params.id, status);
      res.json(usuario);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async associarPlano(req, res) {
    try {
      const { planoId } = req.body;
      const usuario = await usuarioService.associarPlano(req.params.id, planoId);
      res.json(usuario);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new UsuarioController();
