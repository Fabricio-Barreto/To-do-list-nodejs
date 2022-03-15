const mongoose = require("mongoose");

// Conectando ao Database usando a biblioteca mongoose.
const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@todolist.kcfxv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("MongoDB Atlas Connect!")
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = connectToDb
