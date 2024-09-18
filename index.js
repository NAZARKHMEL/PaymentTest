const express = require('express');
const app = express();
const path = require('path');

// Порт для сервера
const PORT = 3000;

// Статические файлы (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'views')));

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});