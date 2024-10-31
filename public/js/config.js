let config=JSON.parse(localStorage.getItem("Game"))

function actualiser(){

    if(config==null){
        config={
            Players:{
              Player1:{
                Name:"Bleu",
                Event:[["body",{"background":"#4040e1"}],[".jeu",{"color":"#0000ff"}]],
                css:{"animation":"Basic 1s","background":"#0000ff"},
                win:[[".tableau *",{"background":"#0000ff"}]]
             },
             Player2:{
                 Name:"Rouge",
                 Event:[["body",{"background":"#ff6969"}],[".jeu",{"color":"#ff0000"}]],
                 css:{"animation":"Basic 1s","background":"#ff0000"},
                 win:[[".tableau *",{"background":"#ff0000"}]]
             }
            },
              Jeu:{
                      Null:[[$(".tableau *"),{"background":"gray"}]],
                      Nul:[[$(".jeu"),{"color":"gray"}],[$("body"),{"background":"gray"}]]
               
                    }
             }
        localStorage.setItem("Game",JSON.stringify(config))
    }
let Player1=config.Players.Player1
let Player2=config.Players.Player2
$(".Player1 .name").val(Player1.Name)
$(".Player2 .name").val(Player2.Name)
$(".Player1 .color").val(Player1.Event[1].color)
$(".Player2 .color").val(Player2.Event[1].color)
}

$(()=>{
    actualiser()
    $(".sauv").on("click",(event)=>{
        localStorage.setItem("Game",JSON.stringify(config))
        config.Players.Player1.Name=$(".Player1 .name").val()
        config.Players.Player2.Name=$(".Player2 .name").val()
        actualiser()
    })
})