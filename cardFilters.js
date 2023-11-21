export function cardFilter(list,listeFiltre){
    //On récupère l'array list qui corespond à l'objet result de l'api
let monthCheck =document.querySelector("#checkMonthFilter").checked
let date = document.querySelector("#dateFilterMonth").value
let search = document.querySelector('#search').value
let searchTitle = document.querySelector('#searchTitle').value


//let kwCheck = document.querySelector(".checkFilterKW1").checked ?? document.querySelector(".checkFilterKW2").checked ?? document.querySelector(".checkFilterKW3").checked



list.forEach(element => {
let tempElement = 0
let keywords = element.keywords_fr
let titleWords = element.title_fr
let stageDate = element.firstdate_begin.slice(0,7)
    if (monthCheck){
        if (date===stageDate){tempElement = element}
        if (search!="" && keywords != null){let count=0;keywords.forEach(key =>{if (key === search){count++}});if(count===0){tempElement=0}}
        if(searchTitle!=""&&searchTitle!=titleWords){tempElement=0}
    }
    if (search!="" && keywords != null){
        keywords.forEach(key =>{
        if (key === search){tempElement = element}
            if(searchTitle!=""&&searchTitle!=titleWords){tempElement=0}
            if(monthCheck){if(date=!stageDate){tempElement=0}}
    })}
    if (searchTitle===titleWords){
        tempElement = element
        if (search!="" && keywords != null){let count=0;keywords.forEach(key =>{if (key === search){count++}});if(count===0){tempElement=0}}
        if(monthCheck){if(date=!stageDate){tempElement=0}}
    }


        

if(tempElement!=0){listeFiltre.push(element)}
});


}