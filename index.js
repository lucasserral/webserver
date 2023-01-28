import express from "express";
import path from "path";
import url from "url";
import hbs from "hbs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8080;

const settings = {
  name: "Lucas Serral",
  title: "ExpressJS project with hbs",
};

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");

// serve static content.
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", settings);
});

app.get("/generic", (req, res) => {
  res.render("generic", settings);
});

app.get("/elements", (req, res) => {
  res.render("elements", settings);
});

app.listen(port);
