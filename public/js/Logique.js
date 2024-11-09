
let coup=0;
let partie=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
    ]
    


function matrice(cible,tour){
        let i=$(".tableau").children().index(cible)
        partie[(i-i%3)/3][i%3]=tour ? 1:-1
        return partie
}

function verification(liste){
    
    coup++

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

    function schema(matrice)
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

export default function logique(cible,tour){
 return verification(schema(matrice(cible,tour)))
}