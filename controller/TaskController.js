const Task = require('../model/Task')

const getAllTask = async (req, res) => {
    try {
        const taskList = await Task.find();
        return res.render("index", {taskList});
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}


// Função async, espera o resultado de um outro código para continuar rodando.
const createTask = async (req, res) => {
    const task = req.body;

    if (!task.task) {
        return res.redirect("/")
    }

    try {
        await Task.create(task)
        return res.redirect("/")
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}

module.exports = {
    getAllTask,
    createTask,
}