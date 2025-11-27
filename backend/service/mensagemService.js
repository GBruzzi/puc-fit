const mensagemRepo = require('../repositories/mensagemRepository');

class MensagemService {
  async criarMensagem(mensagem) {
    // Poderia validar se usuário existe, tipoProblema válido, etc.
    const novaMensagem = await mensagemRepo.criarMensagem(mensagem);
    return { id: novaMensagem.id, ...mensagem, dataEnvio: novaMensagem.dataenvio };
  }

  async listarMensagens() {
    return await mensagemRepo.listarMensagens();
  }

  async buscarMensagem(id) {
    const mensagem = await mensagemRepo.buscarPorId(id);
    if (!mensagem) throw new Error('Mensagem não encontrada');
    return mensagem;
  }

  // Método info() que retorna informações resumidas
  info(mensagem) {
    return {
      id: mensagem.id,
      usuario: mensagem.usuario_nome,
      tipoProblema: mensagem.tipoProblema,
      descricao: mensagem.descricao,
      dataEnvio: mensagem.dataEnvio
    };
  }
}

module.exports = new MensagemService();
