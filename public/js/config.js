let config=JSON.parse(localStorage.getItem("Players"))
if(config==null){
    config={
            Player1:{
               Name:"Bleu",
               Event:[[$("body"),{"background":"rgb(64, 64, 255"}],[$(".jeu"),{"color":"blue"}]],
               css:{"animation":"Basic 1s","background":"blue"},
               win:[[$(".tableau *"),{"background":"blue"}]]
            },
            Player2:{
                Name:"Rouge",
                Event:[[$("body"),{"background":"rgb(255, 105, 105)"}],[$(".jeu"),{"color":"red"}]],
                css:{"animation":"Basic 1s","background":"red"},
                win:[[$(".tableau *"),{"background":"red"}]]
            }
     }
}
$(()=>{
    $(".sauv").on("click",(event)=>{
        localStorage.setItem("Config",JSON.stringify(config))
    })
})