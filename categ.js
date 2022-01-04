mainFiltro = []
let back = document.getElementById('volver')
let productCategCards = document.getElementById('productCategCards')

//leer JSON
let deJson = localStorage.getItem('bodega')
const bodegaV1 = JSON.parse(deJson)

let categoriaActual = 
//identificar categorias
   //var categoriaActual = "champagne"
   
/*filtrarC.onclick= () => {
   identCat = "champagne"
}
filtrarV.onclick = () => {
    identCat = "vinos"
}
*/

filtro = ()=>{
    let categoria = bodegaV1.filter(bodegaV1 =>bodegaV1.categ == categoriaActual)
    mainFiltro = categoria
}

productosFiltrados = () => {
    mainFiltro.forEach((e, indice) => {
        productCategCards.innerHTML += `
        <div class="mainCards_card" id="product_${indice+1}">
            <img class="mainCards_card_img" src="${e.img}" alt="">
            <div class="mainCards_card_txt">
                <h2 class="mainCards_card_txt_productName">${e.nombre}</h2>
                <h4 class="mainCards_card_txt_desc">${e.bodega}</h4>
                <h3 class="mainCards_card_txt_cepa">${e.cepa}
                <br>- ${e.cosecha}
                <e class="mainCards_card_txt_price">$${e.precio}</p>
            </div>
        </div>
        `
    })
    localStorage.removeItem('bodega')
    localSave()

}


filtro()
 localSave()
 productosFiltrados()


$(document).ready(function () {
    $('#back').click(function (e) {
        e.preventDefault()
        window.history.back()
    });
});
console.log(categFilter)