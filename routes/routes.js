const routes = require("express").Router()
const TaskController = require("../controller/TaskController")

// exemplo de req.params: /getById/:id/:method, os parametros são id e method.

routes.get("/", TaskController.getAllTask)
routes.post("/create", TaskController.createTask)
routes.get("/getById/:id/:method", TaskController.getById)
routes.post("/updateOne/:id", TaskController.updateOneTask)
routes.get("/deleteOne/:id", TaskController.deleteOneTask)
routes.get("/check/:id", TaskController.taskCheck)

module.exports = routes