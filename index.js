
const express = require("express");
const app = express();
const tasks = require('./routers/router.Task');
const connectDb = require("./db/config");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");



require('dotenv').config()
app.use(express.static('./public'))
app.use(express.json())



app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)
//create post











const port = 4000

const start = async () => {
  try {

    await connectDb(process.env.DB_URL)
    app.listen(port, () => {
      console.log("Server is listening at 4000")
    })

  } catch (error) {
    console.log(error);
  }
}

start();

