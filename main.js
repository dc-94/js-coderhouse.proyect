
let IVA = 1.21
const total = (precio1,precio2) =>  precio1 + precio2
const precio1 = () => parseInt(prompt("Ingrese un precio de producto"))
const precio2 = () => parseInt(prompt("Ingrese un precio de producto"))
const resultadoNeto = (total) => console.log(`El total Neto es ${total}`)
const final = (total) => total * IVA
const resultadoConIVA = (final) => console.log(`El total con iva es ${final}`)

resultadoNeto(total(precio1(),precio2()))
resultadoConIVA(final(total(precio1(),precio2())))