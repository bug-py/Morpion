
const Game={
    Players:{
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
    },
     Jeu:{
       Null:[[$(".tableau *"),{"background":"gray"}]],
       Nul:[[$(".jeu"),{"color":"gray"}],[$("body"),{"background":"gray"}]]

     }
  }
 const Player1=Game.Players.Player1
 const Player2=Game.Players.Player2
 console.log(Player1,Player2)
  function graphique(param){
    for(let cible of param){
      cible[0].css(cible[1])
    }
  }
  function start(init){
      graphique(init ? Player1.Event:Player2.Event);
      $(".jeu").text(`C'est partit ${init ? Player1.Name:Player2.Name}`);
  }
  function choisi(child,tour){
        graphique(!tour ?Player1.Event:Player2.Event)
        $(child).css(tour ? Player1.css:Player2.css)
        $(".jeu").text(`Au tour du ${!tour ? Player1.Name:Player2.Name}`)
        
  }
  function win(winner){
    if(typeof(winner)=="string"){
      $(".jeu").text("Match Nul")
      setTimeout(()=>{graphique(Game.Jeu.Null)},1000)
      graphique(Game.Jeu.Nul)
      return
    }
    
    $(".jeu").text(`Bravo tu as gagné ${winner ? Player1.Name:Player2.Name}`)
    setTimeout(() => {graphique(winner ? Player1.win:Player2.win)},1000); 
    graphique(winner ? Player1.Event :Player2.Event)
  }
export {choisi,win,start}