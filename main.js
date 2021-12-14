let bodegaV = []
//card productos
let mainCards = document.getElementById("mainCards")
//botones
let filtrarV = document.getElementById('navLink-vinos')
let filtrarC = document.getElementById('navLinks-champ')
let filtrarD = document.getElementById('navLinks-dest')
let filtrarDeli = document.getElementById('navLinks-deli')
//formulario
let addProductForm = document.getElementById("addProductForm")
//filtros
let ordenABC = document.getElementById('abc')


class Vino {
    constructor(categ, nombre, cepa, bodega,img, cosecha, precio){
    this.categ = categ
    this.nombre = nombre
    this.cepa = cepa
    this.bodega = bodega
    this.img = img
    this.cosecha = cosecha
    this.precio = precio
    }
}


bodegaV.push(new Vino("champagne","cuvee Exceptionnelle", "Blanc de Blancs","Salentein","https://cepadevinos.com/wp-content/uploads/2016/09/Espumante-Salentein-Blanc-de-Blancs-Fullbody.png","n/a", 950))
bodegaV.push(new Vino("vinos","carpe Diem", "Pinot Noir","La Espera","https://mly1ygebnr2t.i.optimole.com/ScIDir0.w5KU~57308/w:600/h:600/q:89/https://vinotecaleneas.com/wp-content/uploads/2020/11/La-Espera-Carpe-Diem-Pinot-Noir.jpg",2018, 780))
bodegaV.push(new Vino("vinos","mas Janeil Le Petit Pas", "Grenache Noir / Syrah / Carignan / Mourvedre", "Francois Lurton","https://images.vivino.com/thumbs/P6vDe0gcTJCVrTwGofbMzg_pb_600x600.png", 2016, 2120))
bodegaV.push(new Vino("vinos","monteagrelo", "Cabernet Franc", "Bressia","https://images.vivino.com/thumbs/4Ug9g_psSOejUXKDVSt4TA_pl_375x500.png", 2019, 2200))
bodegaV.push(new Vino("vinos","humberto Canale Estate", "Cabernet Franc", "Humberto Canale","https://vinotecaligier.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/b/e/be03905_2.jpg", 2019, 900))
bodegaV.push(new Vino("vinos","golden reserve", "Malbec", "Trivento","http://cdn.shopify.com/s/files/1/0215/7051/9140/products/trivento-golden-reserve-malbec-2019-vino-trivento-438468.jpg?v=1629756944", 2019, 1250))
bodegaV.push(new Vino("vinos","corte Argentino", "Malbec", "Francois Lurton","https://www.espaciovino.com.ar/media/default/0001/53/thumb_52818_default_medium.jpeg", 2013, 3470))
bodegaV.push(new Vino("vinos","cono Sur Reserva", "Carmenere", "Cono Sur","https://vinotecaligier.com/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/v/i/vi10924_1.jpg", 2018, 1450))
bodegaV.push(new Vino("vinos","trivento Reserva", "Cabernet Sauvignon", "Trivento","https://www.espaciovino.com.ar/media/default/0001/58/thumb_57329_default_medium.jpeg", 2020, 490))



// guardar JSON
function localSave(){
    let aJson = JSON.stringify(bodegaV)
    localStorage.setItem("bodega",aJson)
}



//mostrar productos cargados
showCatalog = () => {
    bodegaV.forEach((Vino, indice) => {
        mainCards.innerHTML += `
        <div class="mainCards_card" id="product_${indice+1}">
            <img class="mainCards_card_img" src="${Vino.img}" alt="">
            <div class="mainCards_card_txt">
                <h2 class="mainCards_card_txt_productName">${Vino.nombre}</h2>
                <h4 class="mainCards_card_txt_desc">${Vino.bodega}</h4>
                <h3 class="mainCards_card_txt_cepa">${Vino.cepa}
                <br>- ${Vino.cosecha}
                <p class="mainCards_card_txt_price">$${Vino.precio}</p>
            </div>
        </div>
        `
    })
 }
 

//agregar vino
//  addProductForm.addEventListener('submit',(e) =>{
//      e.preventDefault()
//      console.log(e.target)
//     let categ = document.getElementById('categ').value.toLowerCase()
//     let nombre = document.getElementById('nombre').value.toLowerCase()
//     let cepa = document.getElementById('cepa').value.toLowerCase()
//     let bodeg = document.getElementById('bodega').value.toLowerCase()
//     let img = document.getElementById('img').value
//     let cosecha = document.getElementById('cosecha').value
//     let precio = document.getElementById('precio').value

//     bodegaV.push(new Vino(categ,nombre, cepa,bodeg,img,cosecha,precio))
//     localSave()
//     addProductForm.reset()
//     mainCards.innerHTML=""
//     showCatalog()
//     hide()
// }) 
$(()=>{
    $('#addProductForm').submit((e) =>{
        e.preventDefault()
        let formDat = new FormData(e.target)
        let newItem = new Vino(formDat.get("categ"),formDat.get("nombre"),formDat.get("cepa"),formDat.get("bodega"),formDat.get("img"),formDat.get("cosecha"),formDat.get("precio"))
        bodegaV.push(newItem)
        $('#addProductForm').trigger("reset")
       mainCards.innerHTML=""
        showCatalog()
        hide()
    })
})

//orden alfabetico
$('#abc').click(() => {
    ordenABC()
})

ordenABC = () => {
    bodegaV.sort(function(a,b){
        return a.nombre > b.nombre
    })
    mainCards.innerHTML=""
    showCatalog()
}
$('#addNew').click(()=>{
    show()
})
$('.mainProductForm-btn-cancel').click (() =>{
    hide()
})
// mostrar formulario
show = () =>{
    let layout=document.querySelector(".mainProductForm")
    layout.style.display="block"
}
//ocultar formulario
hide = () =>{
    let layout=document.querySelector(".mainProductForm")
    layout.style.display="none"
}

localSave()
showCatalog()

$(".mainCards_card").mouseenter(function(){
    $(this).animate({
        height: "315px",
        margin:".3rem",
        borderRadius:"12px"
//        boxShadow: "0px 0px 30px #44f"
        }, 100)
}).mouseleave(function(){
    $(this).animate({ 
        height: "310px",
        margin:".5rem",
        borderRadius:"8px"
//        boxShadow: "0px 0px 10px #fff"
    }, 80);
});