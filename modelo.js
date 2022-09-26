function Juego(){
    this.partidas={};
	this.usuarios={}; //array asociativo
	
	this.agregarUsuario=function(nick){
		if(!this.usuarios[nick]){
			this.usuarios[nick]=new Usuario(nick,this); //Al hacer new Usurario le paso el juego con this
		}
	}
	this.eliminarUsuario=function(nick){
		delete this.usuarios[nick];	
	}
	this.crearPartida=function(nick){
	//obtener codigo unico
	//crear la partida con propietario nick
	//devolvver el codigo 
	
	
	}
	
}

//


function Usuario(nick,juego){
	this.nick=nick;
	this.juego;
	this.crearPartida=function(){
		this.juego.crearPartida(this.nick);
	}
}

function Partida(codigo){
	this.codigo= codigo;
}