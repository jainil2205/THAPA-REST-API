require('dotenv').config()
const express = require('express');

const app=express();

const connectDB=require('./db/connect');

const PORT=process.env.PORT || 8080;

const products_routes=require("./routes/products")

// const productSchema=require("./models/product")

app.get('/',(req,res)=>{
    res.send("Jai Mahakal")

})

app.use("/api/products",products_routes);

const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT,()=>{
            console.log(`${PORT} Yes I am connected`);
        });

    }catch(error){
        console.log(error); 

    }
};
start();