const express = require('express');
const app = express();
app.use(express.json());


const usuarioRoutes = require('./routes/usuarioRoutes');
const planoRoutes = require('./routes/planoRoutes');
const controleAcessoRoutes = require('./routes/controleAcessoRoutes');
const mensagemRoutes = require('./routes/mensagemRoutes');
const relatorioRoutes = require('./routes/relatorioRoutes');


app.use('/usuarios', usuarioRoutes);
app.use('/planos', planoRoutes);
app.use('/controle-acesso', controleAcessoRoutes);
app.use('/mensagens', mensagemRoutes);
app.use('/relatorios', relatorioRoutes);


app.get('/', (req, res) => {
  res.send('PUC Fit API rodando!');
});

 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
