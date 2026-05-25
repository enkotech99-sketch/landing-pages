import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.resolve(__dirname, "business-data.json");

app.use(cors());
app.use(express.json());

const clientBuildPath = path.resolve(__dirname, "../client/dist");
if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) {
      return next();
    }
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
}

function loadBusinessData() {
  const raw = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(raw);
}

app.get("/api/business-info", (req, res) => {
  const data = loadBusinessData();
  res.json(data);
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contacto recibido:", { name, email, message });
  res.json({ status: "ok", message: "Gracias por tu mensaje. Pronto nos pondremos en contacto." });
});

app.listen(port, () => {
  console.log(`Servidor backend iniciado en http://localhost:${port}`);
});
