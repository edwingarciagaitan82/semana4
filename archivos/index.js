
// let { dato, objeto } = require('./modulos/datos')
// console.log("Hola mundo")
// console.log(objeto.nombre)
// console.log(dato)

// let { sumar, multiplicar } = require('./modulos/operaciones')
// console.log(sumar(1,2))
// console.log(multiplicar(1,2))


//leyendo archivos
// const fs = require('fs')
// const dataFile = fs.readFileSync("./modulos/archivo1.txt", "utf-8")
// console.log(dataFile)

//creaando archivos
// const fs = require('fs')
// fs.writeFile("./modulos/archivo2.txt", 
//             "este es mi segundo archivo \n otra linea  \t tabulado  \n retorno de carro ", 
//             (err)=>{  
//                 console.log(err)}
//             )


//recorriendo una archivo
const fs = require('fs')
const dataFile = fs.readFileSync("./modulos/archivo2.txt", "utf-8")
console.log(dataFile)

const lines = dataFile.split("\n")
console.log(lines.length)
lines.map((line,i) =>{ 
    console.log(`linea ${i}`,line) 
})