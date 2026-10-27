const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/chat", (req, res) => {
  const message = req.body.message.toLowerCase();
  let response = "Desculpe, não entendi sua pergunta.";

  if (message.includes("login")) {
    response = "Você pode redefinir sua senha clicando em 'Esqueci minha senha'.";
  } else if (message.includes("plano")) {
    response = "Temos planos Básico e Premium. Qual você gostaria de saber mais?";
  } else if (message.includes("atendente")) {
    response = "Ok! Encaminhando você para um atendente.";
  } else if (message.includes("horário") || message.includes("horario") || message.includes("abre") || message.includes("fecha")) {
    response = "Funcionamos de segunda a sexta, das 8h às 18h, e aos sábados das 8h às 12h.";
  } else if (message.includes("onde fica") || message.includes("endereço") || message.includes("endereco") || message.includes("localização") || message.includes("localizacao")) {
    response = "Estamos na Av. Paulista, 1000 - Bela Vista, São Paulo - SP.";
  } else if (message.includes("promoção") || message.includes("promocao") || message.includes("promoções") || message.includes("promocoes") || message.includes("desconto")) {
    response = "Este mês o plano Premium está com 20% de desconto nos 3 primeiros meses!";
  }

  res.json({ reply: response });
});

app.listen(3000, () => console.log("Chatbot rodando na porta 3000"));
