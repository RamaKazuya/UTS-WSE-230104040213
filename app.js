const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const { logSuccess } = require('./utils/logger');
const apiInfo = require('./config/apiInfo');

const studentsRouter = require('./routes/students');
const responseTime = require('./middleware/responseTime');

const app = express(); // <-- deklarasi dulu baru dipakai
const PORT = 3000;

// serve frontend
app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(responseTime);

// routes
app.use('/api/students', studentsRouter);

// info endpoint
app.get('/api/info', (req, res) => {
  res.status(200).json({
    status: "success",
    code: 200,
    timestamp: new Date().toISOString(),
    data: apiInfo,
    message: "Service aktif dan siap digunakan!"
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: "fail",
    code: 404,
    message: "Endpoint tidak ditemukan"
  });
});

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    status: "error",
    code: 500,
    message: "Internal Server Error"
  });
});

app.listen(PORT, () => {
  logSuccess(`Server running on http://localhost:${PORT}`);
});
