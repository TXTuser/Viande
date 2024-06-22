const Router = require("express");
const tableController = require("../controllers/tableController");
const router = new Router();

router.post("/", tableController.create);
router.get("/", tableController.getAll);
// router.post("/update", tableController.update)
// router.delete("/", tableController.deleteOne)

module.exports = router;
