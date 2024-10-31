let config=JSON.parse(localStorage.getItem("Config"))
if(config==null){
    config={
        Name:"Bleu",
        Event:[[$("body"),{"background":"rgb(64, 64, 255"}],[$(".jeu"),{"color":"blue"}]],
        css:{"animation":"Basic 1s","background":"blue"},
        win:[[$(".tableau *"),{"background":"blue"}]]
     }
}
$(()=>{
    $(".sauv").on("click",(event)=>{
        event.target
    })
})