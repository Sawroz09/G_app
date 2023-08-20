const express=require('express');
require('dotenv').config();
require('./db/conn')
const app=express();
const users=require('./models/userSchema.js')
const cors=require('cors')
const router=require('./routes/router')
const port=process.env.port ||5000
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(port,()=>{
    console.log("server is running on port 5000");
})