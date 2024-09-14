import express from 'express';
import mongoose from 'mongoose';
import { getEditoras, getNomeEditora } from './controllers/editoras.controller';
import { getLivros, getLivroPorId, criarLivro, atualizarLivro, deletarLivro } from './controllers/livros.controller';

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/meu-banco')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));

app.use(express.json());

// Rotas de editoras
app.get('/editoras', getEditoras);
app.get('/editoras/:codEditora', getNomeEditora);

// Rotas de livros
app.get('/livros', getLivros);
app.get('/livros/:id', getLivroPorId);
app.post('/livros', criarLivro);
app.put('/livros/:id', atualizarLivro);
app.delete('/livros/:id', deletarLivro);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
