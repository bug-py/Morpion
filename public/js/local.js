import {choisi,win,start} from "/public/js/Visual.js"
import {tour,partie,vérification,schéma,matrice} from "/public/js/Logique.js"
$(function(){
     start(tour)
     $(".tableau *").on("click",(event)=>
     {
      choisi(event.target,tour)
     matrice(event.target)
     $(event.target).off("click")
     let resultat=vérification(schéma(partie))
    
     if(resultat!=undefined){
        $(".tableau *").off("click")
        win(resultat)
     }

     })
 })