const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/', usuarioController.cadastrar.bind(usuarioController));
router.get('/', usuarioController.listar.bind(usuarioController));
router.get('/:id', usuarioController.buscar.bind(usuarioController));
router.put('/:id', usuarioController.atualizar.bind(usuarioController));
router.delete('/:id', usuarioController.deletar.bind(usuarioController));

// Rotas de negócio
router.post('/:id/desconto', usuarioController.aplicarDescontoAtleta.bind(usuarioController));
router.put('/:id/status', usuarioController.atualizarStatusAtleta.bind(usuarioController));
router.put('/:id/plano', usuarioController.associarPlano.bind(usuarioController));

module.exports = router;
