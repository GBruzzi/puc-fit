const usuarioRepo = require('../repositories/usuarioRepository');

class UsuarioService {
  async cadastrarUsuario(usuario) {
    // Se não informar status, default para false
    if (usuario.statusAtleta === undefined) usuario.statusAtleta = false;
    const id = await usuarioRepo.create(usuario);
    return { id, ...usuario };
  }

  async listarUsuarios() {
    return await usuarioRepo.findAll();
  }

  async buscarUsuario(id) {
    return await usuarioRepo.findById(id);
  }

  async atualizarUsuario(id, usuario) {
    await usuarioRepo.update(id, usuario);
    return { id, ...usuario };
  }

  async deletarUsuario(id) {
    await usuarioRepo.delete(id);
  }

  // Métodos de negócio
  async aplicarDescontoAtleta(id, percentual) {
    const usuario = await this.buscarUsuario(id);
    if (!usuario) throw new Error('Usuário não encontrado');
    if (!usuario.plano_id) throw new Error('Usuário não possui plano associado');

    const { planoService } = require('./planoService');
    await planoService.aplicarDesconto(usuario.plano_id, percentual);
    return { mensagem: `Desconto de ${percentual}% aplicado ao usuário ${usuario.nome}` };
  }

  async atualizarStatusAtleta(id, status) {
    const usuario = await this.buscarUsuario(id);
    if (!usuario) throw new Error('Usuário não encontrado');
    usuario.statusAtleta = status;
    await this.atualizarUsuario(id, usuario);
    return usuario;
  }

  async associarPlano(id, planoId) {
    const usuario = await this.buscarUsuario(id);
    if (!usuario) throw new Error('Usuário não encontrado');
    usuario.planoId = planoId;
    await this.atualizarUsuario(id, usuario);
    return usuario;
  }
}

module.exports = new UsuarioService();
