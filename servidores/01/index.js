const http = require('http')

const puerto = 3000
http.createServer(
    function(request, response){
        console.log("url ",request.url)
        if(request.url =="/"){
            response.write("Pagina de Inicio")
        }

        if(request.url =="/registro"){
            response.write("Pagina Registro")
        }
        
        if(request.url == "/holamundo"){
            
        }
        // console.log("method", request.method)
        response.write("<html><h3>No Encontrado</h3><h1>404</h1></html>")
        response.end()
    }
).listen(puerto)
console.log("servidor activo en el puerto: ", puerto)