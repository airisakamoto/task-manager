const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let tasks = [];

// Rota para obter todas as tarefas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Rota para adicionar uma nova tarefa
app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

// Rota para deletar todas as tarefas
app.delete('/tasks', (req, res) => {
  tasks = [];
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
