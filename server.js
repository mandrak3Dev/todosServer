// server.js
const { app, PORT, db } = require('./config');
const routes = require('./routes');

// Conectar rutas al servidor
app.use('/api', routes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
