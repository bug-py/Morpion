let tour;
let red=[{"background":"rgb(255, 105, 105)"},{"color":"red"}]
let blue=[{"background":"rgb(64, 64, 255"},{"color":"blue"}]
function graphique(cible,css){
  $("body").css(css[0])
  cible.css(css[1])
}
 function start(init){
    graphique($(".jeu"),init ? blue:red);
    $(".jeu").text(`C'est partit ${init ? "Bleu":"Rouge"}`);
    tour=init
 }
function choisi(child){
      let enfant=$(child)
      if(tour){
         graphique(enfant,[{},{"animation":"choisi 1s","background":"blue"}])
        $(".jeu").text("Au tour du Rouge !")
         graphique($(".jeu"),red)
         tour=false
        
      }
      else{
        graphique(enfant,[{},{"animation":"choisi 1s","background":"red"}])
        $(".jeu").text("Au tour du Bleu !")
         graphique($(".jeu"),blue)

         tour=true
         
         
      }
 }
 function win(winner){
  if(typeof(winner)=="string"){
     $(".jeu").text("Match Nul")
     setTimeout(() => {
     $(".tableau *").css({"background":"rgb(100, 100, 100)"})
    },1000); 
    graphique($(".jeu"),[{"background":"gray"},{"color":"gray"}])
    return
  }
  
  $(".jeu").text(`Bravo tu as gagné ${winner ? "Blue":"Red"}`)
  setTimeout(() => {
    $(".tableau *").css("background",winner ? "blue":"red")
  },2000); 
    winner ? graphique($(".jeu"),blue):graphique($(".jeu"),red)
  
 }