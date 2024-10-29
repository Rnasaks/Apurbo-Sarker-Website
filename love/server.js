// Import necessary modules
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000; // You can change this port if needed

// Middleware
app.use(cors());  // Enable CORS for cross-origin requests
app.use(express.json());  // Parse incoming JSON payloads

app.post('/api/message', async (req, res) => {
    const userMessage = req.body.message; // User message from the frontend

    // Simulated bot response for testing
    const mockBotResponse = `You said: "${userMessage}". This is a mock response.`;

    // Send the simulated response back to the frontend
    res.json({ message: mockBotResponse });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
