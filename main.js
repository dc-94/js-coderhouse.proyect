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

function agregarVino(){
    bodega.push(new Vino(prompt("Ingrese el nambre del vino"), prompt("Ingrese la cepa"), 
    prompt("Ingrese la bodega"), 
    parseInt(prompt("Ingrese el año de cosecha")), 
    parseInt(prompt("Ingrese el precio"))
        )
    )
}

console.log(bodega)
agregarVino()
console.log(bodega)