const fs = require('fs');
const express = require('express');
const app = express();
const modelo = require("./servidor/modelo.js");

let juego = new modelo.Juego();

//HTTP GET POST PUT DELETE
/*
get "/"
get "/obtenerPartidas"
post get "/agregarUsuario/:nick"
put "/actualizarPartida"
delete "/"
*/


//app.get('/', (req,res)=> {
  //  res
    ////  .send("Hola")
        //.end();
//});

app.use(express.static(__dirname + "/"));

app.get("/", function(request,response){
	var contenido=fs.readFileSync(__dirname+"/cliente/index.html");
	response.setHeader("Content-type","text/html");
	response.send(contenido);
});

app.get("/agregarUsuario/:nick",function(request,response){
  let nick = request.params.nick;
  let res=juego.agregarUsuario(nick);
  response.send(res);//
});

app.get("/crearPartida/:nick",function(request,response){
  let nick = request.params.nick;
  let res = juego.jugadorCreaPartida(nick);
  response.send(res);
});

app.get("/unirseAPartida/:nick/:codigo",function(request,response){
  let nick = request.params.nick;
  let codigo = request.params.codigo;
  let res = juego.jugadorSeUneAPartida(nick,codigo);
  response.send(res);
});

app.get("/obtenerPartidas",function(request,response){
  let lista=juego.obtenerPartidas();
  response.send(lista);
});

app.get("/obtenerPartidasDisponibles",function(request,response){
  let lista=juego.obtenerPartidasDisponibles();
  response.send(lista);
});






const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl + C to quit.');
})