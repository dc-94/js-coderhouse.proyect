let nombre = (prompt("¿Cual es tu Nombre y Apellido?"))
let nacimiento = parseFloat(prompt("¿En que año naciste?"))
let edad = (2021 - nacimiento)
let pais = (prompt("País de origen"))


if (edad >= 18) {
        let edad = 'may'
    if (pais == "argentina") {
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
