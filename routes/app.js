// routes.js
const express = require("express");
const Todo = require("../models/Todo"); // Ajusta la ruta al archivo que contiene el modelo

const router = express.Router();

// Rutas
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error("Error al obtener tareas:", error);
    res.status(500).json({ error: "Error al obtener tareas" });
  }
});

router.post("/todos", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error al agregar tarea:", error);
    res.status(500).json({ error: "Error al agregar tarea" });
  }
});

router.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { task },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    console.error("Error al actualizar tarea:", error);
    res.status(500).json({ error: "Error al actualizar tarea" });
  }
});

router.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Tarea eliminada con éxito" });
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
    res.status(500).json({ error: "Error al eliminar tarea" });
  }
});

module.exports = router;
