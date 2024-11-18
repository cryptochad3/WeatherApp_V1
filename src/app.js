import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;

app.get('/weather', async (req, res) => {
  try {
    const { city } = req.query;
    
    if (!city) {
      return res.status(400).json({ error: 'City parameter is required' });
    }

    const response = await fetch(
      `${process.env.OPEN_WEATHER_API_URL}weather?q=${city}&appid=${process.env.OPEN_WEATHER_SECRET_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Weather service error');
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});
