const mensagemRepo = require('../repository/mensagemRepository');
const pool = require('../db/connection');

jest.mock('../db/connection');

describe('MensagemRepository', () => {
  test('criarMensagem deve executar query com os valores corretos', async () => {

    pool.query.mockResolvedValue({
      rows: [{ id: 123, dataEnvio: "2025-01-01" }]
    });

    const msg = {
      usuarioId: 1,
      tipoProblema: "teste",
      descricao: "descrição"
    };

    const res = await mensagemRepo.criarMensagem(msg);

    expect(pool.query).toHaveBeenCalledTimes(1);
    expect(res.id).toBe(123);
  });
});
