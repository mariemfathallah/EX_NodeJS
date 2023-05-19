const express = require("express");
const app = express();
const path = require("path");
const ConnectDB = require("./connectDB/ConnectDB");
const RouterGroupe = require("./routes/routeGroupe.js");

app.get("/", (req, res) => {
  res.send("Bienvenu sur la page d’accueil");
});
app.post("/groupes", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "/public/groupe.html"));
});
app.get("/groupe/:num", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1>Détail du groupe IRM num" + " " + +req.params.num + "</h1>");
});

app.use(express.json());
app.use(RouterGroupe);

ConnectDB;

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app is running on port: http://localhost:${PORT}`);
});
