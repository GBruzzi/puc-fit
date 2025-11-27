const request = require('supertest');
const express = require('express');
const mensagemRoutes = require('../routes/mensagemRoutes');
const mensagemService = require('../service/mensagemService');

jest.mock('../service/mensagemService');

const app = express();
app.use(express.json());
app.use('/mensagens', mensagemRoutes);

describe('MensagemController', () => {

  test('POST /mensagens deve validar campos ausentes', async () => {
    const res = await request(app)
      .post('/mensagens')
      .send({});

    expect(res.status).toBe(400);
    expect(res.body.error).toBe('usuarioId, tipoProblema e descricao são obrigatórios');
  });

  test('GET /mensagens/:id deve retornar info formatada', async () => {
    mensagemService.buscarMensagem.mockResolvedValue({
      id: 1,
      usuario_nome: "João",
      tipoProblema: "bug",
      descricao: "deu erro",
      dataEnvio: "2025-01-01"
    });

    mensagemService.info.mockReturnValue({
      id: 1,
      usuario: "João",
      tipoProblema: "bug",
      descricao: "deu erro",
      dataEnvio: "2025-01-01"
    });

    const res = await request(app).get('/mensagens/1');

    expect(res.status).toBe(200);
    expect(res.body.usuario).toBe("João");
  });

});
