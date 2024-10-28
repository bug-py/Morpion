let tour;
let red=[{"background":"rgb(255, 105, 105)"},{"color":"red"}]
let blue=[{"background":"rgb(64, 64, 255"},{"color":"blue"}]
let coup=0;
let partie=[
  [0,0,0],
  [0,0,0],
  [0,0,0]
]
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
 function matrice(cible){
  let i=$(".tableau").children().index(cible)
  partie[(i-i%3)/3][i%3]=tour ? 1:-1

 }
 function vérification(liste){
  for(let element of liste){
    if(element.includes(3)){
        return true;
       }
       if(element.includes(-3)){
             
          return false;
       }
  }
  if(coup==9){
    return "null"
  }
   }

   function schéma(matrice)
   {
      let liste=[[0,0,0],[0,0,0],[0,0]]
      for(let index=0;index<matrice.length;index++)
      {
      for(let i=0;i<matrice[index].length;i++)
       {
       
       let element=partie[index][i]
       liste[0][index]+=element
       liste[1][i]+=element

       if(index==i)
        {
        liste[2][0]+=element
        if(index==1)
            {
             liste[2][1]+=element
            }
        }
        else if(i+index==2)
          {
           liste[2][1]+=element
          }  
       }
      }
      return liste
   }