const express = require("express");
const router = express();

router.use("/adopet/users", require("./UserRoutes"));

router.get("/", (req, res) => {
  res.send("Tudo certo por aqui!");
});

module.exports = router;
