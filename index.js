import express from "express";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8080;

// serve static content.
app.use(express.static("public"));

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo");
});

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port);
