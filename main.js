
let IVA = 1.21

     const total = (precio1,precio2) =>  precio1 + precio2
    const precio1 = () => parseInt(prompt("Ingrese un precio de producto"))
    const precio2 = () => parseInt(prompt("Ingrese un precio de producto"))
     //terminar = () => prompt("¿Desea agregar mas items? ( SI / NO )").toLowerCase();
    const final = (total) => total * IVA
const resultado = (total,final) => console.log(`El total es ${total} y con iva ${final}`)

resultado(total(final(precio1(),precio2())))