const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url} - IP: ${req.ip}`);
  next();
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

app.get('/A1_Slides', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/A1_CISC_322_Group_25_Presentation.pdf'));
});

app.get('/A1_Report', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/A1_CISC_322_Group_25_Report.pdf'));
});

app.get('/A2_Slides', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/CISC_322_A2_Group_25_Slides.pdf'));
});

app.get('/A2_Report', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/A2_CISC_322_Group_25_Report.pdf'));
});

app.get('/A3_Report', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/A3_CISC_322_Group_25_Report.pdf'));
});

app.get('/A3_Slides', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/A3_CISC_322_Group_25_Slides.pdf'));
});
// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

