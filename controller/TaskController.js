const Task = require('../model/Task')

let message = ""
let type = ""

// req.params
// An object containing parameter values parsed from the URL path.
// For example if you have the route /user/:name, then the "name" from the URL path wil be available as req.params.name

const getAllTask = async (req, res) => {
    try {
        var data = new Date()
        var hora = data.getHours()
        console.log(hora)


        setTimeout(() => {
            message = "";
        }, 1500)
        const taskList = await Task.find();
        return res.render("index", {
            taskList, 
            task: null, 
            taskDelete: null,
            message,
            type
        });
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}


// Função async, espera o resultado de um outro código para continuar rodando.
const createTask = async (req, res) => {
    const task = req.body;

    if (!task.task) {
        message = "Insira um Texto"
        type = "danger"
        return res.redirect("/")
    }

    try {
        await Task.create(task)
        message = "Tarefa criada com sucesso!"
        type = "success"
        return res.redirect("/")
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}

const getById = async (req, res) => {
    try {
        const taskList = await Task.find()

        if (req.params.method == "update") {
            const task = await Task.findOne({ _id: req.params.id})
            res.render("index", {task, taskDelete: null, taskList, message, type})  
        } else {
            const taskDelete = await Task.findOne({ _id: req.params.id})
            res.render("index", {task: null, taskDelete, taskList, message, type})  
        }
    
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}

const updateOneTask = async (req, res) => {
    try {
        const task = req.body
    
        await Task.updateOne({ _id: req.params.id}, task)
        
        message = "Tarefa atualizada com sucesso"
        type = "success"

        res.redirect("/")
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}

const deleteOneTask = async (req, res) => {
    try {
        await Task.deleteOne({ _id: req.params.id})
        message = "Tarefa apagada com sucesso"
        type = "success"
        res.redirect("/")
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}

const taskCheck = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id})

        task.check ? task.check = false : task.check =true

        await Task.updateOne({ _id: req.params.id}, task)
        res.redirect("/")
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}

module.exports = {
    getAllTask,
    createTask,
    getById,
    updateOneTask,
    deleteOneTask,
    taskCheck,

}