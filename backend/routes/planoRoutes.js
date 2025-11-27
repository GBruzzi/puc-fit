const express = require('express');
const router = express.Router();
const planoController = require('../controllers/planoController');

router.post('/', planoController.cadastrar.bind(planoController));
router.get('/', planoController.listar.bind(planoController));
router.get('/:id', planoController.buscar.bind(planoController));
router.put('/:id', planoController.atualizar.bind(planoController));
router.delete('/:id', planoController.deletar.bind(planoController));

// Rotas de negócio
router.post('/:id/desconto', planoController.aplicarDesconto.bind(planoController));
router.delete('/:id/desconto', planoController.removerDesconto.bind(planoController));

module.exports = router;
