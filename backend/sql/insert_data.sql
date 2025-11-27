INSERT INTO Plano (tipo, valor, dataInicio, dataFim, descontoAplicado)
VALUES 
('Mensal', 150.00, '2025-01-01', '2025-12-31', 0),
('Trimestral', 400.00, '2025-01-01', '2025-12-31', 0),
('Semestral', 750.00, '2025-01-01', '2025-12-31', 0),
('Anual', 1400.00, '2025-01-01', '2025-12-31', 0);


INSERT INTO Usuario (nome, cpf, matricula, email, statusAtleta, plano_id)
VALUES 
('Rafael Alves', '12345678901', '2025001', 'rafael@email.com', TRUE, 1),
('Ana Souza', '23456789012', '2025002', 'ana@email.com', FALSE, 2),
('Bruno Lima', '34567890123', '2025003', 'bruno@email.com', TRUE, 3),
('Carla Mendes', '45678901234', '2025004', 'carla@email.com', FALSE, 1),
('Daniel Costa', '56789012345', '2025005', 'daniel@email.com', TRUE, 4);


INSERT INTO ControleAcesso (usuario_id, dataHora)
VALUES 
(1, '2025-03-01 08:15:00'),
(1, '2025-03-02 09:00:00'),
(2, '2025-03-01 18:30:00'),
(3, '2025-03-03 07:45:00'),
(4, '2025-03-02 20:00:00'),
(5, '2025-03-04 06:30:00');


INSERT INTO Mensagem (usuario_id, tipoProblema, descricao)
VALUES 
(1, 'Dúvida', 'Qual é o horário de funcionamento no feriado?'),
(2, 'Reclamação', 'O ar-condicionado não está funcionando.'),
(3, 'Sugestão', 'Seria bom ter aulas de pilates à noite.'),
(4, 'Dúvida', 'Como posso alterar meu plano?'),
(5, 'Reclamação', 'A esteira está quebrada.');
