const express = require('express');
const router = express.Router();
const relatorioController = require('../controllers/relatorioController');

router.get('/semestral', relatorioController.gerar.bind(relatorioController));

module.exports = router;
