let partie=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
 ]
 let tour=false
 $(function(){
     function red(){
      $("body").css("background","  rgb(255, 105, 105)")
      $(".jeu").removeClass("tourb").addClass("tourr")
     }
     function blue(){
     $("body").css("background","rgb(64, 64, 255)")
      $(".jeu").removeClass("tourr").addClass("tourb")
     }
     function choisi(child,etat){
          let enfant=$(child)
          if(etat){
             enfant.addClass("rond")
             red()
 
          }
          else{
             enfant.addClass("croix")
             blue()
          }
     }
     red()
     $(".tableau *").on("click",(event)=>{
     let tableau=$(".tableau")
 
     let i=tableau.children().index(event.target)
 
     partie[(i-i%3)/3][i%3]=tour ? 1:-1
 
     choisi(event.target,tour)
 
     $(event.target).off("click")
 
     verif=[[0,0,0],[0,0,0],[0,0]]
 
     for(let index=0;index<partie.length;index++)
     {
     for(let element=0;element<partie[index].length;element++)
     {
       let r=partie[index][element]
       verif[0][index]+=r
       verif[1][element]+=r
       if(index==element)
       {
         verif[2][0]+=r
         if(index==1)
         {
           verif[2][1]+=r
         }
       }
       else if(element+index==2)
       {
         verif[2][1]+=r
       }  
     }
     }
     verif.forEach((element) => {
       if(element.includes(3))
       {
         $(".tableau *").off("click")
         $(".jeu").text("Bravo tu as gagné ")
         setTimeout(() => {
           $(".tableau *").css("background","blue")
         },2000); 
         blue()
 
         
       }
       if(element.includes(-3))
       {
         console.log("gagné pour le rouge")
         $(".tableau *").off("click")
         $(".jeu").text("Bravo tu as gagné ")
         setTimeout(() => {
           $(".tableau *").css("background","red")
         },2000); 
         red()
       
       }
     })
     tour=!tour
   })
 })