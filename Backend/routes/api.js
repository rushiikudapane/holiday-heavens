const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("Router working good");
});

module.exports = router;
