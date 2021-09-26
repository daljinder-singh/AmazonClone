require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')

app.use(cors())

app.listen(port,()=>{
    console.log(`${port} is runing`)
})