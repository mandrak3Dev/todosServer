// routes/index.js
const express = require("express");
const todoRoutes = require("./app");
const authRoutes = require("./auth"); // Agrega las rutas de autenticación

const router = express.Router();

router.use("/app", todoRoutes);
router.use("/auth", authRoutes); // Usa las rutas de autenticación

module.exports = router;
