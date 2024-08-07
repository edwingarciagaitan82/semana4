const fs = require('fs')

function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // resolve(x);
        console.log("archivo pdf descargado")
      }, 4000);
    });
  }

async function pdfCargar(){

    await resolveAfter2Seconds(2)
    // const dato  =  await fetch("https://github.com/b055/books-1/blob/master/Concurrency%20in%20Go.pdf")
    // .then( res => console.log("archivo pdf descargado") )
    // const dataFile0 = fs.readFileSync("./files/pdfexample.pdf")
    // console.log()
}

function archivoCargar(){
    const dataFile1 = fs.readFileSync("./files/registro.html", "utf-8")
console.log("archivo Cargado")
}


console.log("operacion 1")
console.log("operacion 2")
pdfCargar()
// console.log("time out")
console.log("operacion 3")

archivoCargar()
console.log("operacion 4")
console.log("operacion 5")
