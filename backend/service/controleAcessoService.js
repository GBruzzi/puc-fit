const controleRepo = require('../repositories/controleAcessoRepository');

class ControleAcessoService {
  async registrarEntrada(usuarioId) {
    // Aqui você poderia validar se o usuário existe, se necessário
    return await controleRepo.registrarEntrada(usuarioId);
  }

  async listarAcessos() {
    return await controleRepo.listarAcessos();
  }
}

module.exports = new ControleAcessoService();
