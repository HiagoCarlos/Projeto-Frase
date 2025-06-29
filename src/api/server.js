const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const quotes = [
  "A persistência realiza o impossível.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
  "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.",
  "Não espere por uma crise para descobrir o que é importante em sua vida.",
  "Sua única limitação é você mesmo."
];

app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`API service running on port ${PORT}`);
});