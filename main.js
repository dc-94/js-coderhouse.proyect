class Note{
    constructor(title, content, priority){
        this.title = title
        this.content = content
        this.priority = priority
    }
    showNotes(){
        return `
        - ${this.title} 
        - ${this.content} 
        - ${this.priority}`
    }
}

const nota1 = new Note("primera nota","Espero funcione", 4)
const nota2 = new Note("second one","damn, I hate deadlines", 2)
const nota3 = new Note(prompt("Ingrese titulo"), prompt("Ingrese texto"), parseInt(prompt("Ingrese prioridad: (1 a 5)")))
function localSave(){
    let toJSON = JSON.stringify(Note)
    localStorage.setItem("note", toJSON)
}
localSave()
/*
class Auto{ 
    constructor(marca, modelo, puertas, precio){
    this.marca = marca ;
    this.modelo= modelo ;
    this.puertas = puertas ;
    this.precio = precio ;
    }
    aptoFlia(){
        if((this.puertas) >= 5 ){
            if(this.precio <= 3000000){
            console.log(`${this.marca} ${this.modelo} es apto para tu familia`)
            }else{
                console.log(`${this.marca} ${this.modelo} es apto para tu familia...pero reee caro`)
            }
        }else{
            if(this.precio <= 3000000){
                console.log(`${this.marca} ${this.modelo} serviría si aún fueras soltero`)
            }else{
            console.log(`${this.marca} ${this.modelo} serviría si aún fueras soltero y tuvieras $$$`)

            }
        }
    }
}
const auto1 = new Auto("Volkswagen", "Suran", 5, 1090000)
const auto2 = new Auto("BMW", "X5", 5, 11980000)
const auto3 = new Auto("Smart", "Fortwo", 2, 2000000)
const auto4 = new Auto("Porsche", "911", 3, 25980000)
const auto5 = new Auto(prompt("Marca del auto:"),prompt("Modelo:"), parseInt(prompt("Cantidad de puertas:")), parseInt(prompt("Precio:")))
auto1.aptoFlia()
auto2.aptoFlia()
auto3.aptoFlia()
auto4.aptoFlia()
auto5.aptoFlia()

let sum = 0;
let terminar = true;
let cant = 0;
while(terminar != "no") {
    // let item = prompt("Ingrese un item").toUpperCase()
    let precio = parseInt(prompt("Ingrese el precio"))
    
    sum += precio
    terminar = prompt("¿Desea agregar mas items? ( SI / NO )").toLowerCase();
}
document.write(`<p>El total es: <strong>$${sum}</strong></p>`)
let dividir = prompt("¿Desea dividir la cuenta? (SI / NO").toLowerCase()

if (dividir == 'si') {
    let personas = parseInt(prompt("Ingrese cantidad de comensales"))
    let parte = (sum / personas)
    document.write(`<p class="sub">A cada persona le corresponde: <strong>$${parte}</strong></p>`)
} 


// alert("El total es:" + " " + "$"+sum + " " +
//     "A cada persona le corresponde" + " " + "$"+parte)


/*let nombre = (prompt("¿Cual es tu Nombre y Apellido?"))
let nacimiento = parseFloat(prompt("¿En que año naciste?"))
let edad = (2021 - nacimiento)
let pais = prompt("País de origen").toLocaleLowerCase()


if (edad >= 18) {
        let edad = 'may'
    if (pais == "argentina"){
        let nacionalidad = 'arg'
        // console.log("mayor y arg")
        document.write(`<div class="carnet">
        <img src="cat.webp" alt="" >
        <div class="txt">
            <h1>${nombre}</h1>
            <br>
            <h3>Año de Nacimiento:</h3>
            <h2 class="${edad}">${nacimiento}</h2>
            <h2 class="${nacionalidad}">${pais}</h2>
        </div>
        </div>`)                
    }
    else{
        // console.log("mayor y extr")
        let nacionalidad = 'ext'
        document.write(`<div class="carnet">
        <img src="cat.webp" alt="" >
        <div class="txt">
            <h1>${nombre}</h1>
            <br>
            <h3>Año de Nacimiento:</h3>
            <h2 class="${edad}">${nacimiento}</h2>
            <h2 class="${nacionalidad}">${pais}</h2>
        </div>
        </div>`)
    }
}else if (pais == "argentina"){
    let nacionalidad = 'arg'
    // console.log("menor y arg")
    document.write(`<div class="carnet">
    <img src="cat.webp" alt="" >
    <div class="txt">
        <h1>${nombre}</h1>
        <br>
        <h3>Año de Nacimiento:</h3>
        <h2 class="${edad}">${nacimiento}</h2>
        <h2 class="${nacionalidad}">${pais}</h2>
    </div>
    </div>`)
}else{
    let edad = "men"
    let nacionalidad = 'ext'
    // console.log("menor y extr")
    document.write(`<div class="carnet">
        <img src="cat.webp" alt="" >
        <div class="txt">
            <h1>${nombre}</h1>
            <br>
            <h3>Año de Nacimiento:</h3>
            <h2 class="${edad}">${nacimiento}</h2>
            <h2 class="${nacionalidad}">${pais}</h2>
        </div>
    </div>`)    
}
*/