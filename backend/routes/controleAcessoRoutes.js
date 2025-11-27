const express = require('express');
const router = express.Router();
const controleController = require('../controllers/controleAcessoController');

router.post('/', controleController.registrar.bind(controleController));
router.get('/', controleController.listar.bind(controleController));

module.exports = router;
