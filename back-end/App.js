require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT;

const app = express();

//JSON config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Upload directory for images
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//db connection
require("./config/dbConn");

//routes
const router = require("./routes/Router.js");
app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta http://localhost:${port} `);
});
