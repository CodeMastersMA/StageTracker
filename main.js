/* 
CE SCRIPT SERT A CHARGER LES AUTRES SCRIP, LES API, ET A LANCER LES FONCTION 0 PARTIR DES BOUTTONS.

/!!!\ PAS TOUCHER /!!!\
*/

// LOAD API
const reponse = await fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=keywords_fr%3A%22concert%22&refine=location_countrycode%3A%22FR%22&refine=lastdate_begin%3A%222023%22");
const ods = await reponse.json()
//IMPORT FUNCTIONS
import * as fnct from "/cardShow.js"

//INIT VARIABLES
console.log(ods)
const list = ods.results


//LOAD DE LA PAGE DE BASE
document.querySelector("#nbrShow").textContent=`Nombre de concerts: ${ods.total_count}`
fnct.cardLoad(list)





/*boutton de test du json*/document.querySelector("#test").addEventListener("click", () => console.log(ods) )








