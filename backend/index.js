require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')

const routes = require('./routes/routes')
const mongo = require('./config/mongoConfig')

app.use(express.json());
app.use(cors())
app.use(routes)

//set view engine
app.set('view engine' , 'ejs');

app.listen(port,()=>{
    console.log(`${port} is runing`)
})