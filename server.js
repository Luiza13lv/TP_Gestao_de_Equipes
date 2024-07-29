const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Função para ler o arquivo de dados de treinamento
function loadTrainingData(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return data.split('\n').filter(line => line.trim() !== ''); // Remove linhas vazias
    } catch (err) {
        console.error(`Erro ao ler o arquivo ${filePath}:`, err);
        return [];
    }
}

// Carregar dados de treinamento do arquivo data.txt
const trainingData = loadTrainingData('data.txt');

// Construa um prompt que inclua todas as informações de treinamento
function buildPrompt(userQuestion) {
    const infoString = trainingData.join('\n');
    return `${infoString}\n\nPergunta: ${userQuestion}\nResposta:`;
}

app.post('/get-bot-response', async (req, res) => {
    const prompt = req.body.prompt.toLowerCase();
    const completePrompt = buildPrompt(prompt);

    try {
        const result = await model.generateContent(completePrompt);
        const response = result.response;
        res.json({ response: response.text() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
