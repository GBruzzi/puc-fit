const mensagemService = require('../service/mensagemService');
const mensagemRepo = require('../repository/mensagemRepository');

jest.mock('../repository/mensagemRepository');

describe('MensagemService', () => {

  test('criarMensagem deve retornar objeto com id e dataEnvio', async () => {
    mensagemRepo.criarMensagem.mockResolvedValue({
      id: 10,
      dataenvio: "2025-01-01"
    });

    const result = await mensagemService.criarMensagem({
      usuarioId: 1,
      tipoProblema: "bug",
      descricao: "erro teste"
    });

    expect(result.id).toBe(10);
    expect(result.dataEnvio).toBe("2025-01-01");
  });

  test('buscarMensagem deve lançar erro se não existir', async () => {
    mensagemRepo.buscarPorId.mockResolvedValue(null);

    await expect(mensagemService.buscarMensagem(999))
      .rejects
      .toThrow('Mensagem não encontrada');
  });
});
