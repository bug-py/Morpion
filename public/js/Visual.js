
  const Propriété={
    NomT:"Bleu",
    NomF:"Rouge",
    bFalse:[[$("body"),{"background":"rgb(255, 105, 105)"}],[$(".jeu"),{"color":"red"}]],
    bTrue:[[$("body"),{"background":"rgb(64, 64, 255"}],[$(".jeu"),{"color":"blue"}]],
    True:{"animation":"choisi 1s","background":"blue"},
    False:{"animation":"choisi 1s","background":"red"}
  }
 
  function graphique(param){
    for(let cible of param){
      cible[0].css(cible[1])
    }
   
  }
  function start(init){
      graphique(init ? Propriété.bTrue:Propriété.bFalse);
      $(".jeu").text(`C'est partit ${init ? Propriété.NomT:Propriété.NomF}`);
  }
  function choisi(child,tour){
        graphique(tour ?Propriété.bTrue:Propriété.bFalse)
        $(child).css(tour ? Propriété.True:Propriété.False)
        $(".jeu").text(`Au tour du ${tour ? Propriété.NomT:Propriété.NomF}`)
  }
  function win(winner){
    if(typeof(winner)=="string"){
      $(".jeu").text("Match Nul")
      setTimeout(() => {
      $(".tableau *").css({"background":"rgb(100, 100, 100)"})
      },1000); 
      //graphique($(".jeu"),[{"background":"gray"},{"color":"gray"}])
      console.log("égalité")
      return
    }
    
    $(".jeu").text(`Bravo tu as gagné ${winner ? Propriété.NomT:Propriété.NomF}`)
    setTimeout(() => {
      $(".tableau *").css("background",winner ? Propriété.NomT:Propriété.NomF)
    },2000); 
       graphique(winner ? Propriété.bTrue :Propriété.bFalse)
  }
export {Propriété,graphique,choisi,win,start}