require("dotenv").config()
const port=process.env.port
const express=require("express")
const app=express()
const http=require("http").createServer(app)
const io= new require("socket.io")(http)
const groupe=[]
app.use("/public",express.static(`${__dirname}/public`))
app.get("/",(req,res)=>{
  res.sendFile(`${__dirname}/public/html/Morpion.html`)
})
app.get("/local",(req,res)=>{
  res.sendFile(`${__dirname}/public/html/local.html`)
})
app.get("/online",(req,res)=>{
  res.sendFile(`${__dirname}/public/html/online.html`)
})
app.all("*",(req,res)=>{
  res.redirect("/")
})


io.on("connection",(socket)=>{
  socket.on("serveur",(nom)=>{
    if(groupe.includes(nom)){
      socket.emit("error")
    }else{
      groupe.push(nom)
     socket.join(groupe)
     socket.on("action",(action)=>{
      io.to(groupe).emit("action",action)
     })
    }
  })
  socket.on("client",(nom)=>{
    if(groupe.includes(nom)){
      groupe.slice(groupe.indexOf(nom),1)
      socket.join(groupe)
      io.to(nom).emit("start")
      socket.on("info",(info)=>{
        io.to(groupe).emit("info",info)
       })
    }else{
      socket.emit("error")
    }
  })
})
http.listen(port,()=>{
    console.log(`écoute sur le port ${port}...`)
})