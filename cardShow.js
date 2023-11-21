


export function cardLoad(list){


    {list.forEach(element => {
        const section = document.querySelector("#section")
        const card = document.createElement("div")
        if(element.image){}else{element.image="https://static.vecteezy.com/ti/vecteur-libre/p3/6122514-musique-concert-scene-fond-vectoriel.jpg"}
        card.innerHTML=`
        <li><div id="cards"><div class="card" id="${element.uid}" style="width: 18rem;"><p>${element.daterange_fr}</p>
        <img id="img" src="${element.image}" class="card-img-top" alt="">
        <div class="card-body"><h2 id="title">${element.title_fr}</h2><p class="card-text" id="desc">${element.description_fr}</p><p class="fs-6">Region:${element.location_region}</p><p class="fs-6">Adresse:${element.location_address}</p><p class="fs-6">Mots Clés${element.keywords_fr}</p>
        </div></div></div></li>
        `
        section.appendChild(card) 
 
    })
}}

