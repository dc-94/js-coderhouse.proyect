let bodega = []

class Vino {
    constructor(nombre, cepa, bodega,img, cosecha, precio){
    this.nombre = nombre
    this.cepa = cepa
    this.bodega = bodega
    this.img = img
    this.cosecha = cosecha
    this.precio = precio
    }
}

bodega.push(new Vino("Carpe Diem", "Pinot Noir","La Espera","https://mly1ygebnr2t.i.optimole.com/ScIDir0.w5KU~57308/w:600/h:600/q:89/https://vinotecaleneas.com/wp-content/uploads/2020/11/La-Espera-Carpe-Diem-Pinot-Noir.jpg",2018, 780))
bodega.push(new Vino("Mas Janeil Le Petit Pas", "Grenache Noir / Syrah / Carignan / Mourvedre", "Francois Lurton","https://images.vivino.com/thumbs/P6vDe0gcTJCVrTwGofbMzg_pb_600x600.png", 2016, 2120))
bodega.push(new Vino("Monteagrelo", "Cabernet Franc", "Bressia","https://images.vivino.com/thumbs/4Ug9g_psSOejUXKDVSt4TA_pl_375x500.png", 2019, 2200))
bodega.push(new Vino("Humberto Canale Estate", "Cabernet Franc", "Humberto Canale","https://vinotecaligier.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/b/e/be03905_2.jpg", 2019, 900))
bodega.push(new Vino("Golden Reserve", "Malbec", "Trivento","http://cdn.shopify.com/s/files/1/0215/7051/9140/products/trivento-golden-reserve-malbec-2019-vino-trivento-438468.jpg?v=1629756944", 2019, 1250))
bodega.push(new Vino("Corte Argentino", "Malbec", "Francois Lurton","https://www.espaciovino.com.ar/media/default/0001/53/thumb_52818_default_medium.jpeg", 2013, 3470))
bodega.push(new Vino("Cono Sur Reserva", "Carmenere", "Cono Sur","https://vinotecaligier.com/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/v/i/vi10924_1.jpg", 2018, 1450))
bodega.push(new Vino("Trivento Reserva", "Cabernet Sauvignon", "Trivento","https://www.espaciovino.com.ar/media/default/0001/58/thumb_57329_default_medium.jpeg", 2020, 490))


let mainCards = document.getElementById("mainCards")
bodega.forEach(Vino => {
    mainCards.innerHTML += `
    <div class="mainCards_card">
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
//let addItem = document.getElementById("addItem")


// guardar JSON
/*function localSave(){
    let aJson = JSON.stringify(bodega)
    localStorage.setItem("bodega",aJson)
}
localSave()*/
//leer JSON
// function localRead(){
//     let deJson= localStorage.getItem("bodega")
//     const bodega = JSON.parse(deJson)
//}
//
// //pregunta si agregar mas o no
function masVino(){
    let morewine = prompt("desea agregar mas vino? SI/NO").toLowerCase()
    if(morewine == "si"){
        agregarVino()
        masVino()
    }else if(morewine == "no"){
        mainQuestion()
    }else{
     alert("Era SI o NO lo que tenias que responder!")   
    }
}
//
//agregar vino
function agregarVino(){
    bodega.push(new Vino(prompt("Ingrese el nambre del vino"), prompt("Ingrese la cepa"), 
    prompt("Ingrese la bodega"), 
    parseInt(prompt("Ingrese el año de cosecha")), 
    parseInt(prompt("Ingrese el precio"))
        )
    )
//    localSave()
    masVino()
}
// masVino()
// //
// //orden alfabetico
// function ordenABC(){
//     bodega.sort(function(a,b){
//         return a.nombre > b.nombre
//     })
//     console.log(bodega)
// }
// //
// //por precio > <
// function searchPrecio(){
//     let valor = parseInt(prompt("ingrese un precio (490 a 3580)"))
//     let orden = prompt("desea buscar productos por debajo o sobre ese precio? ( < ó > )")
//     if (orden == "<"){
//         console.log(bodega.filter(vino => vino.precio <= valor))
//     }else if(orden == ">"){
//         console.log(bodega.filter(vino => vino.precio >= valor))
//     }else{
//         console.log("ingresaste un carácter no valido")
//     }
// }
// //
// //por cosecha
// function searchCosecha(){
//     let valor = parseInt(prompt("ingrese un año (2013 a 2020)"))
//     let orden = prompt("desea buscar productos por debajo o sobre ese año de cosecha? ( < ó > )")
//     if (orden == "<"){
//         console.log(bodega.filter(vino => vino.cosecha <= valor))
//     }else if(orden == ">"){
//         console.log(bodega.filter(vino => vino.cosecha >= valor))
//     }else{
//         console.log("ingresaste un carácter no valido")
//     }
// }
// //
// //como buscar?
// function searchMethod(){
//     let searchQ = prompt(" desea ordenar los productos por orden alfabetico (A) ó buscar por precio (P) o cosecha (C)?").toUpperCase()
//     if (searchQ == "A"){
//         ordenABC()
//     }else if(searchQ == "P"){
//         searchPrecio()
//     }else{
//         searchCosecha()
//     }
// }
// //que desea hacer?
// function mainQuestion(){
//     let firstQ = prompt("Quiere agregar, buscar un vino ó consultar el catálogo? (A/B/C)").toUpperCase()
//     if (firstQ == "A"){
//         agregarVino()
//     }else if(firstQ == "B"){
//         searchMethod()
//     }else{
//         alert("Podés consultar el catálogo en la consola y local Storage")
//     }
// }
// mainQuestion()