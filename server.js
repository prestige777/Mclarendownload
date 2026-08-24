const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Facebook video download endpoint
app.post('/api/download-facebook', async (req, res) => {
  try {
    const { url } = req.body;
    
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    // Using SaveFrom.net API (alternative to other services)
    // This is one of the most reliable methods for Facebook videos
    const response = await axios.get(`https://api.savefrom.net/info?url=${encodeURIComponent(url)}&format=json`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (response.data && response.data.url) {
      res.json({
        success: true,
        videoUrl: response.data.url,
        title: response.data.title || 'Video',
        quality: response.data.quality || 'Medium'
      });
    } else {
      res.status(400).json({ 
        error: 'Could not extract video URL from Facebook link',
        details: 'The video might be private, removed, or requires authentication'
      });
    }
  } catch (error) {
    console.error('Download error:', error.message);
    res.status(500).json({ 
      error: 'Failed to download video',
      message: error.message,
      hint: 'Ensure the Facebook video link is public and valid'
    });
  }
});

// YouTube video download endpoint
app.post('/api/download-youtube', async (req, res) => {
  try {
    const { url } = req.body;
    
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    // Using SaveFrom.net API for YouTube as well
    const response = await axios.get(`https://api.savefrom.net/info?url=${encodeURIComponent(url)}&format=json`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (response.data && response.data.url) {
      res.json({
        success: true,
        videoUrl: response.data.url,
        title: response.data.title || 'Video',
        quality: response.data.quality || 'High'
      });
    } else {
      res.status(400).json({ 
        error: 'Could not extract video URL from YouTube link'
      });
    }
  } catch (error) {
    console.error('Download error:', error.message);
    res.status(500).json({ 
      error: 'Failed to download video',
      message: error.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Mclarendownload server running on http://localhost:${PORT}`);
  console.log('Ready to download Facebook and YouTube videos!');
});