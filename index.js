const express = require("express");
const app = express();
const PORT = 3000;

// Simulación de clave sensible (vulnerabilidad)
const API_KEY = "FAKE-SECRET-KEY-123456";

app.get("/", (req, res) => {
  res.send("Aplicación vulnerable de ejemplo 🚨");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});