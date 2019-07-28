const express = require("express")
const app = express();
const fs =require("fs")
 
app.get("/app",(req,res)=>{
    res.end("Estoy en la ruta /app")
  })

app.get("/",(req,res)=>{
    res.send("Estoy en Home")
  })



app.get("*",(req,res)=>{
  res.send("No se donde estoy")
})

app.listen(3000,()=>{
    console.log("El servidor express está escuchando en el puerto 3000")
  })