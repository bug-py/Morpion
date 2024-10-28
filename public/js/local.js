let partie=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
 ]
 
let coup=0;
 $(function(){
  
   function vérification(liste){
    for(let element of liste){
      if(element.includes(3)){
          return true;
         }
         if(element.includes(-3)){
               
            return false;
         }
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
     start(true)
     $(".tableau *").on("click",(event)=>
     {
      coup++
     let i=$(".tableau").children().index(event.target)
     partie[(i-i%3)/3][i%3]=tour ? 1:-1
     choisi(event.target)
     $(event.target).off("click")
    let resultat=vérification(schéma(partie))
    if(coup==9){
      resultat="null"
    }
     if(resultat!=undefined){
        $(".tableau *").off("click")
        win(resultat)
     }
     })
 })