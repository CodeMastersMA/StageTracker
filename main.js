const reponse = await fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=keywords_fr%3A%22concert%22&refine=location_countrycode%3A%22FR%22&refine=lastdate_begin%3A%222023%22");
const ods = await reponse.json()

/*boutton de test du json*/document.querySelector("#test").addEventListener("click", () => console.log(ods) )

/* 
CE SCRIPT SERT A CHARGER LES AUTRES SCRIP, LES API, ET A LANCER LES FONCTION 0 PARTIR DES BOUTTONS.

/!!!\ PAS TOUCHER /!!!\
*/






