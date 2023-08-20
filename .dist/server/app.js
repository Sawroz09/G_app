const express=require('express');
require('dotenv').config();
require('./db/conn')
const app=express();
const users=require('./models/userSchema.js')
const cors=require('cors')
const router=require('./routes/router')
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(5000,()=>{
    console.log("server is running on port 5000");
})