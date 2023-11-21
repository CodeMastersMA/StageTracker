/* 
CE SCRIPT SERT A CHARGER LES AUTRES SCRIP, LES API, ET A LANCER LES FONCTION 0 PARTIR DES BOUTTONS.


PENSEZ A LIRE LE FICHIER README


/!!!\ PAS TOUCHER /!!!\
*/

// LOAD API
const reponse = await fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=-1&refine=location_countrycode%3A%22FR%22&refine=updatedat%3A%222023%22 ");
const ods = await reponse.json()

//IMPORT FUNCTIONS
import { cardFilter } from "./cardFilters.js"
import * as fnct from "/cardShow.js"


//INIT VARIABLES
const list = ods.results


//LOAD DE LA PAGE DE BASE
document.querySelector("#nbrShow").textContent=`Nombre de concerts: ${list.length}`
fnct.cardLoad(list)
//A FINIR: POP OVER POUR LES INFO SUPP
//document.querySelector("#cards").addEventListener('click', fnct.cardPopOver(1,list))

//CHANGEMENT DE FILTRES
let listeFiltre;
document.querySelector("#filterForm").addEventListener('change', function(){

    if(document.querySelector("#filterGen").checked){
        listeFiltre = []
        cardFilter(list,listeFiltre)
        document.querySelector("#section").innerHTML=`<ul id="section"></ul>`
        document.querySelector("#nbrShow").textContent=`Nombre de concerts: ${listeFiltre.length}`
    }else{listeFiltre = list}
    fnct.cardLoad(listeFiltre)
})
















