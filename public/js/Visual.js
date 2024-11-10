
import json from "./json.js"
let Game=json(localStorage.getItem("Game"),{
Players:{
      Player1:{
        name:"Bleu",
      background:"#4040e1",
      color:"#0000ff",
      animation:{"name":"Basic","time":1}
     },
     Player2:{
         name:"Rouge",
         background:"#ff6969",
         color:"#ff0000",
         animation:{"name":"Basic","time":1}  
     }
    },
      Jeu:{
             color:"#808080",
             background:"#808080"
            }
     })
  
     
console.log(Game)

 function simple(bool){
  return bool?Game.Players.Player1:Game.Players.Player2
 }
 function changement(who){
  $("body").css("background",who.background)
  $(".jeu").css("color",who.color)
 }
 function getscore(){
  return json(sessionStorage.getItem("score"),[0,0])
 }
 function nombre(list){
  const players=Game.Players
  $("#scorer").text(list[0])
  $("#scorer").css("color",players.Player2.color)
  $("#scoreb").text(list[1])
  $("#scoreb").css("color",players.Player1.color)
}
  function start(init){
      nombre(getscore())
      changement(simple(init));
      $(".jeu").text(`C'est partit ${simple(init).name}`);
  }
  function choisi(child,tour){
       const player=simple(tour)
        changement(simple(!tour))
       
        $(child).css({"animation":`${player.animation.name} ${player.animation.time}s`,"background":player.color})
        $(".jeu").text(`Au tour du ${simple(!tour).name} `)
  }

  function win(winner){
    const player=simple(winner)
    let score=getscore()
    if(typeof(winner)=="string"){
      score[0]+=1
      score[1]+=1
      console.log(score[0])
      sessionStorage.setItem("score",JSON.stringify(score))
      nombre(score)
      $(".jeu").text("Match Nul")
      setTimeout(()=>{$(".tableau *").css("background",Game.Jeu.color)},1000)
      
      changement(Game.Jeu)
     
      return
    }
    console.log(score[0])
  
    score[BigInt(winner)]+=1
    console.log(score)
    sessionStorage.setItem("score",JSON.stringify(score))
    nombre(score)
    $(".jeu").text(`Bravo tu as gagné ${player.name}`)
    setTimeout(() => {$(".tableau *").css("background",player.color)},1000); 
    changement(simple(winner))
    
  }
export {choisi,win,start}