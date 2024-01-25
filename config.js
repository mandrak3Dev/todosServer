// config.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importa el middleware cors
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para manejar el cuerpo de las solicitudes JSON
app.use(express.json());

// Habilita CORS para todas las rutas
app.use(cors());

// Conexión a MongoDB Atlas
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todoapp';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB Atlas');
});

module.exports = { app, PORT, db };
