const mongoose  = require('mongoose')
const bodyParser = require('body-parser');
const logger= require('./config/logger');
const config = require('config');
const express = require('express');
const app =express();
// const logger = require('./logger')
app.use(bodyParser.json());

const userRoutes = require("./src/Routes/user.routes")

const db = require('./config/database')
const Message = require('./config/message')

mongoose.connect(db.uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(Message.DATABASE)
}).catch(err=>{
    console.log(err)
})

app.use('/user',userRoutes)

const port = process.env.port ||5000
app.listen(port,()=>{
 console.log(`server is ready on ${port}`)
})
