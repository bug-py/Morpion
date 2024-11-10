export default function json(json,error){
    let objet;
    try{
         objet=JSON.parse(json)
    }
    catch(err){
        return error
    }
    if(!objet || typeof(objet)!="object" || objet=={}){
        console.log(!objet,typeof(objet),objet)
        return error
    }
    return objet
}  