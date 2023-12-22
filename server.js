// server.js
const express = require("express");
const path = require("path");

const app = express();

app.use("/api", (req, res) => {
  const apiServer = "http://localhost:4200";
  const url = apiServer + req.originalUrl;
  req.pipe(request(url)).pipe(res);
});

app.use(express.static(path.join(__dirname, "src")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
  console.log("server is running");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
