// 1. import express
const express=require('express')
const logger=require('./middleware/logger')
const fs=require('fs')
// 2. create express app
const app=express()

// 3. port

const port=8080
// app.use(logger)
// app.get('/firstApi',(req,res)=>{
// res.json('hello')
// })


app.get('/',(req,res)=>{
    fs.readFile('./homepage.html','utf-8',(err,data)=>{
        err?res.send(err):res.send(data)
    })
})

app.get('/contact',(req,res)=>{
    fs.readFile('./Contactus.html','utf-8',(err,data)=>{
        err?res.send(err):res.send(data)
    })
})

app.get('/service',logger,(req,res)=>{
    fs.readFile('./OurServices.html','utf-8',(err,data)=>{
        err?res.send(err):res.send(data)
    })
})
// 4. listning



app.listen(port,(err)=>err? console.log(err):console.log(`app listning on ${port}`))
