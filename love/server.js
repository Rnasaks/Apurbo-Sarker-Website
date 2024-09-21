const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000; // You can change this port if needed

// Middleware
app.use(cors());
app.use(express.json());

// Replace this with your actual OpenAI API key
const OPENAI_API_KEY = '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';

app.post('/api/message', async (req, res) => {
    const userMessage = req.body.message; // Ensure this matches with frontend

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }]
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const botMessage = response.data.choices[0].message.content;
        res.json({ message: botMessage });
    } catch (error) {
        console.error('Error communicating with OpenAI:', error);
        res.status(500).json({ message: "Error processing your request" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
