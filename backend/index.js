require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')

const routes = require('./routes/routes')

app.use(cors())
app.use(routes)

app.listen(port,()=>{
    console.log(`${port} is runing`)
})