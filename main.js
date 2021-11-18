let bodega = []

class Vino {
    constructor(nombre, cepa, bodega, cosecha, precio){
    this.nombre = nombre
    this.cepa = cepa
    this.bodega = bodega
    this.cosecha = cosecha
    this.precio = precio
    }
}

bodega.push(new Vino("Carpe Diem", "Pinot Noir","La Espera",2018, 780))
bodega.push(new Vino("Mas Janeil Le Petit Pas", "Grenache Noir/Syrah/Carignan/Mourvedre", "Francois Lurton", 2016, 2120))
bodega.push(new Vino("Monteagrelo", "Cabernet Franc", "Bressia", 2019, 1100))
bodega.push(new Vino("Estate", "Cabernet Franc", "Humberto Canale", 2019, 900))
bodega.push(new Vino("Golden Reserve", "Malbec", "Trivento", 2019, 1250))
bodega.push(new Vino("Corte Argentino", "Malbec", "Francois Lurton", 2013, 3470))
bodega.push(new Vino("Reserva", "Carmenere", "Cono Sur", 2018, 1450))
bodega.push(new Vino("Reserva", "Cabernet Sauvignon", "Trivento", 2020, 490))

//PENSARLO EN ATOMIC DESIGN !!!

// guardar JSON
function localSave(){
    let aJson = JSON.stringify(bodega)
    localStorage.setItem("bodega",aJson)
}
localSave()
//leer JSON
// function localRead(){
//     let deJson= localStorage.getItem("bodega")
//     const bodega = JSON.parse(deJson)
//}
//
//pregunta si agregar mas o no
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
    localSave()
    console.log(bodega)
    masVino()
}
//
//orden alfabetico
function ordenABC(){
    bodega.sort(function(a,b){
        return a.nombre > b.nombre
    })
    console.log(bodega)
}
//
//por precio > <
function searchPrecio(){
    let valor = parseInt(prompt("ingrese un precio (490 a 3580)"))
    let orden = prompt("desea buscar productos por debajo o sobre ese precio? ( < ó > )")
    if (orden == "<"){
        console.log(bodega.filter(vino => vino.precio <= valor))
    }else if(orden == ">"){
        console.log(bodega.filter(vino => vino.precio >= valor))
    }else{
        console.log("ingresaste un carácter no valido")
    }
}
//
//por cosecha
function searchCosecha(){
    let valor = parseInt(prompt("ingrese un año (2013 a 2020)"))
    let orden = prompt("desea buscar productos por debajo o sobre ese año de cosecha? ( < ó > )")
    if (orden == "<"){
        console.log(bodega.filter(vino => vino.cosecha <= valor))
    }else if(orden == ">"){
        console.log(bodega.filter(vino => vino.cosecha >= valor))
    }else{
        console.log("ingresaste un carácter no valido")
    }
}
//
//como buscar?
function searchMethod(){
    let searchQ = prompt(" desea ordenar los productos por orden alfabetico (A) ó buscar por precio (P) o cosecha (C)?").toUpperCase()
    if (searchQ == "A"){
        ordenABC()
    }else if(searchQ == "P"){
        searchPrecio()
    }else{
        searchCosecha()
    }
}
//que desea hacer?
function mainQuestion(){
    let firstQ = prompt("Quiere agregar, buscar un vino ó consultar el catálogo? (A/B/C)").toUpperCase()
    if (firstQ == "A"){
        agregarVino()
    }else if(firstQ == "B"){
        searchMethod()
    }else{
        alert("Podés consultar el catálogo en la consola y local Storage")
    }
}
mainQuestion()