


export function cardLoad(list){
    console.log("loaded")

    {list.forEach(element => {
        const section = document.querySelector("#section")
        const card = document.createElement("div")
        card.innerHTML=`
        <li><div id="cards"><div class="card" id="${element.uid}" style="width: 18rem;"><p>${element.daterange_fr}</p>
        <img id="img" src="${element.image}" class="card-img-top" alt="https://static.vecteezy.com/ti/vecteur-libre/p3/6122514-musique-concert-scene-fond-vectoriel.jpg">
        <div class="card-body"><h2 id="title">${element.title_fr}</h2><p class="card-text" id="desc">${element.description_fr}</p>
        </div></div></div></li>
        `
        section.appendChild(card)    
    })
}}

export function cardPopOver(id,list){
    console.log("id",id)
    console.log("card clicked")

}