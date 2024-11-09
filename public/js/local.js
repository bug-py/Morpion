import {choisi,win,start} from "/public/js/Visual.js"
import logique from "/public/js/Logique.js"
let tour=Math.floor(Math.random()*2)
$(function(){
     start(!tour)
     $(".tableau *").on("click",(event)=>
     {
      tour=!tour
      let resultat=logique(event.target,tour)
      
      choisi(event.target,tour)
      
     $(event.target).off("click")
     if(resultat!=undefined){
        $(".tableau *").off("click")
        win(resultat)
     }

     })
 })