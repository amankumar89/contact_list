import express from 'express';
import path from 'path';

const port = 5000;

import contactRoutes from './routes/contact.route.js';

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(path.resolve(), "views"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static("assets"));

app.use('/', contactRoutes);

app.get("/practice", (req, res) => {
  return res.render("practice", { title: "My Playground" });
});

app.listen(port, (err) => {
  if (err) {
    console.log("error in running the server !", err);
  }

  console.log(`server is running at http://localhost:${port}`);
});
