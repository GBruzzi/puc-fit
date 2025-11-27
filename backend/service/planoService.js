const planoRepo = require('../repositories/planoRepository');

class PlanoService {
  async cadastrarPlano(plano) {
    const id = await planoRepo.create(plano);
    return { id, ...plano };
  }

  async listarPlanos() {
    return await planoRepo.findAll();
  }

  async buscarPlano(id) {
    return await planoRepo.findById(id);
  }

  async atualizarPlano(id, plano) {
    await planoRepo.update(id, plano);
    return { id, ...plano };
  }

  async deletarPlano(id) {
    await planoRepo.delete(id);
  }

  // Métodos de negócio
  async aplicarDesconto(id, percentual) {
    const plano = await this.buscarPlano(id);
    if (!plano) throw new Error('Plano não encontrado');
    plano.descontoAplicado = percentual;
    await this.atualizarPlano(id, plano);
    return { mensagem: `Desconto de ${percentual}% aplicado ao plano ${plano.tipo}` };
  }

  async removerDesconto(id) {
    const plano = await this.buscarPlano(id);
    if (!plano) throw new Error('Plano não encontrado');
    plano.descontoAplicado = 0;
    await this.atualizarPlano(id, plano);
    return { mensagem: `Desconto removido do plano ${plano.tipo}` };
  }
}

module.exports = new PlanoService();
