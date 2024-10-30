
const socket=io()
$(function(){

})
function serveur(){
    socket.emit("serveur","n")
    socket.on("start",()=>{
        let c=Boolean(Math.floor(Math.random()*2))
        socket.emit("action",`start(${c})`)
        start(c)
    })
    socket.on("info",()=>{

    })


 
 }
 function client(){
     socket.emit("client","n")
     socket.on("action",(action)=>{
        console.log("oui")
        eval(action)
    })
 }