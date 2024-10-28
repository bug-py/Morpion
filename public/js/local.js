$(function(){
     start(true)
     $(".tableau *").on("click",(event)=>
     {
     coup++
     matrice(event.target)
     choisi(event.target)
      $(event.target).off("click")
     let resultat=vérification(schéma(partie))
     if(resultat!=undefined){
        $(".tableau *").off("click")
        win(resultat)
     }
     })
 })