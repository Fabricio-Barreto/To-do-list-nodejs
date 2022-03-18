const mongoose = require("mongoose")

//Obs: By default, Mongoose adds an _id property to your schemas.
const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true
    },
    check: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model("Task", taskSchema)