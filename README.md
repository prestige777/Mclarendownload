# Mclarendownload 🎬

A modern web-based video downloading platform for **Facebook** and **YouTube** videos.

## Features ✨

- ✅ Download Facebook videos (public links)
- ✅ Download YouTube videos
- ✅ Simple and intuitive UI
- ✅ Real-time status updates
- ✅ High-quality video extraction
- ✅ CORS-enabled for cross-origin requests

## Installation 🚀

### Prerequisites
- Node.js (v14 or higher)
- npm

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prestige777/Mclarendownload.git
   cd Mclarendownload
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Access the application:**
   - Open your browser and navigate to `http://localhost:3000`

## Usage 📝

1. Copy a Facebook or YouTube video link
2. Paste the URL into the input field
3. Click the "Download" button
4. Wait for the server to process the video
5. Click the download link to save the video

## API Endpoints 🔌

### Download Facebook Video
```
POST /api/download-facebook
Content-Type: application/json

Body: {
  "url": "https://www.facebook.com/video/..."
}

Response: {
  "success": true,
  "videoUrl": "https://...",
  "title": "Video Title",
  "quality": "Medium"
}
```

### Download YouTube Video
```
POST /api/download-youtube
Content-Type: application/json

Body: {
  "url": "https://www.youtube.com/watch?v=..."
}

Response: {
  "success": true,
  "videoUrl": "https://...",
  "title": "Video Title",
  "quality": "High"
}
```

## Technologies Used 🛠️

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **APIs:** SaveFrom.net API for video extraction
- **Additional:** CORS, Axios for HTTP requests

## Dependencies 📦

```json
{
  "express": "^4.18.2",
  "axios": "^1.4.0",
  "cors": "^2.8.5",
  "yt-dlp-exec": "^0.2.0",
  "puppeteer": "^19.0.0"
}
```

## Development 💻

For development with auto-restart on file changes:

```bash
npm run dev
```

This requires `nodemon` to be installed (included in devDependencies).

## Limitations ⚠️

- **Private videos** cannot be downloaded
- **Age-restricted videos** may not work
- Videos requiring **authentication** are not supported
- Some **copyrighted content** may be protected

## License 📄

This project is licensed under the **BSD 3-Clause License** - see the [LICENSE](LICENSE) file for details.

## Author 👨‍💻

Created by **prestige777**

## Disclaimer ⚖️

This tool is for **educational purposes only**. Users are responsible for complying with the terms of service of respective platforms and local laws regarding video downloading. Downloading copyrighted content without permission is prohibited.

## Support & Issues 🆘

If you encounter any issues:

1. Ensure the server is running (`npm start`)
2. Check that the video URL is valid and public
3. Verify your internet connection
4. Check the browser console for error messages

---

**Made with ❤️ by prestige777**
