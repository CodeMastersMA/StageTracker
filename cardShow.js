


export function cardLoad(list){


    {list.forEach(element => {
        const section = document.querySelector("#section")
        const card = document.createElement("div")
        //REMPLACEMENT SI LES IMAGES NE SONT PAS VALIDES
        element.image = element.image ?? "https://static.vecteezy.com/ti/vecteur-libre/p3/6122514-musique-concert-scene-fond-vectoriel.jpg"
        element.description_fr = element.description_fr ?? "Il n'y a pas de description."
        element.location_region = element.location_region ?? "La région n'est pas précisée."
        element.location_address = element.location_address ?? "L'adresse n'est pas précisée."

        card.innerHTML=`
        <li><div id="cards"><div class="card" id="${element.uid}" style="width: 18rem;"><p>${element.daterange_fr}</p>
        <img id="img" src="${element.image}" class="card-img-top" alt="">
        <div class="card-body"><h2 id="title">${element.title_fr}</h2><p class="text-start" id="desc">${element.description_fr}</p><p class="fs-6 fw-semibold">Region:${element.location_region}</p><p class="fs-6 fw-semibold">Adresse: ${element.location_address}</p><p class="fs-6">Mots Clés: ${element.keywords_fr}</p>
        </div></div></div></li>
        `
        section.appendChild(card) 
 
    })
}}

