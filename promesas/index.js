// const { readFile } =  require('fs')
const fs = require("fs")
function getText(){
try{
    // readFile("./files/registro.html", "utf-8")
    const dataFile1 = fs.readFileSync("./files/registro.html", "utf-8")
    console.log("archivo cargado")
}
catch(e){ console.log("error") }

    // return new Promise(function (resolve, reject){
        
    //     readFile("./files/registro.html", "utf-8", (err ,data)=>{
    //         if(err)
    //             reject("hubo un error")
    //         resolve("archivo Cargado")
    //     })
    // })
    
}


getText()
// .then((result)=> console.log(result))
// .catch((error) => console.log(error) )
