const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.get('/',(req,res)=>{
    res.send("Hello This is from GET")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Server Running on "+ PORT);
})