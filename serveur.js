require("dotenv").config()
const port=process.env.port
const express=require("express")
const app=express()
const http=require("http").createServer(app)
const io= new require("socket.io")(http)
let user=0
app.use("/public",express.static(`${__dirname}/public`))
app.get("/",(req,res)=>{
  res.sendFile(`${__dirname}/public/html/Morpion.html`)
})
app.get("/local",(req,res)=>{
  res.sendFile(`${__dirname}/public/html/local.html`)
})

app.all("*",(req,res)=>{
  res.redirect("/")
})
io.on("connection",(socket)=>{
     user++
     io.emit("user",user)
     socket.on("disconnect",()=>{
      user--
      io.emit("user",user)
     })
})
http.listen(port,()=>{
    console.log(`écoute sur le port ${port}...`)
})