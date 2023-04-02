const router = require("express").Router();
const taskController = require("../controller/TaskController");


router.get('/', taskController.getAll);

module.exports = router;