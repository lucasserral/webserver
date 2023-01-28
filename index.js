import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo");
});

app.get("/*", (req, res) => {
  res.send("ERROR: 404 Not found");
});

app.listen(8080);
