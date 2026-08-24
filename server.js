const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Facebook video download endpoint
app.post('/api/download-facebook', async (req, res) => {
  try {
    const { url } = req.body;
    
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    // Using a third-party API to get Facebook video info
    // You can use services like:
    // 1. facebook-video-downloader (npm package)
    // 2. youtube-dl-exec
    // 3. Custom implementation with puppeteer
    
    const response = await axios.get(`https://api.savefrom.net/info?url=${encodeURIComponent(url)}`);
    
    res.json({
      success: true,
      videoUrl: response.data.url,
      title: response.data.title
    });
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ 
      error: 'Failed to download video',
      message: error.message 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
