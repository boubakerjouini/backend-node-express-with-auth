// create express server with db connection
const express = require("express");
const app = express();
const port = 3000;
const connection = require("./config/database");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
