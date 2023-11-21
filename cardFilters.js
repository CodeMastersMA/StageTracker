export function cardFilter(list,listeFiltre){
    //On récupère l'array list qui corespond à l'objet result de l'api
let dateCheck =document.querySelector("#checkDateFilter").checked
let date = document.querySelector("#dateFilterMonth").value


list.forEach(element => {
    if (dateCheck){
        let input = document.querySelector("#dateFilterMonth").value
        let stageDate = element.firstdate_begin.slice(0,7)
        if (input===stageDate){
            listeFiltre.push(element)
 
            
        }
        
    }else {listeFiltre = list}
    
});
return listeFiltre;

}