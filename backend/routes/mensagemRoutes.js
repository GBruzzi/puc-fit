const express = require('express');
const router = express.Router();
const mensagemController = require('../controllers/mensagemController');

router.post('/', mensagemController.criar.bind(mensagemController));
router.get('/', mensagemController.listar.bind(mensagemController));
router.get('/:id', mensagemController.buscar.bind(mensagemController));

module.exports = router;
