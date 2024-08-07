const http = require('http')

const puerto = 3000
http.createServer(
    function(request, response){
        console.log("url ",request.url)
        if(request.url =="/"){
            response.write("Pagina de Inicio")
        }

        if(request.url =="/registro"){
            // response.write("Pagina Registro")
            const fs = require('fs')
            const dataFile = fs.readFileSync("./pages/registro.html", "utf-8")
            response.write(dataFile)
            response.end()
        }

        if(request.url =="/listado"){
            const fs = require('fs')
            const dataFile = fs.readFileSync("./pages/listado.html", "utf-8")
            response.write(dataFile)
            response.end()
        }
        
        if(request.url == "/holamundo"){
            
        }
    }
).listen(puerto)
console.log("servidor activo en el puerto: ", puerto)