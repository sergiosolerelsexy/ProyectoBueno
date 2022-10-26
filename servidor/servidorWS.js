function ServidorWS(){
	//enviar peticiones
	this.enviarAlRemitente=function(socket,mensaje,datos){
		socket.emit(mensaje,datos);
	}
	this.enviarATodosEnPartida=function(io,codigo,mensaje,datos){
		io.socket.in(codigo).emit(mensaje,datos);
	}
	
	//gestionar peticiones
	this.lanzarServidorWS=function(io,juego){
		let cli = this;
		io.on('connection', (socket) => {
		  console.log('Usuario conectado');
		  
		  socket.on("crearPartida", function(nick){
			let res = juego.jugadorCreaPartida(nick);
			cli.enviarAlRemitente(socket, "partidaCreada",res)
		  });

		  socket.on("unirseAPartida",function(nick,codigo){
			let res=juego.jugadorSeUneAPartida(nick,codigo);
			cli.enviarAlRemitente(socket,"unidoAPartida",res);
			
			let partida=juego.obtenerPartida(codigo);
			if(partida.fase.esJugando()){
				cli.enviarATodosEnPartida(io,codigo,"aJugar",{});
			}
		  })

		});
	}
}

module.exports.ServidorWS=ServidorWS;

