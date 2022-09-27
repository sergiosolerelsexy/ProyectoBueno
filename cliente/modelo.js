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
	this.crearPartida=function(usr){
	//obtener codigo unico
	//crear la partida con propietario nick
	//devolvver el codigo 
	let codigo=Date.now();
	this.partidas[codigo]=new Partida(codigo,usr);
	return codigo;
	}
	
	this.unirseAPartida=function(codigo,usr){
		if(this.partidas[codigo]){
			this.partidas[codigo].agregarJugador(usr);
		}
		else{
		 console.log("la partida no existe");	
		}
		
	}
	this.obtenerPartidas=function(){
		let lista=[];
		for(var key in this.partidas){
			lista.push({"codigo":key,"owner":this.partidas[key].owner});
		}
		return lista;
	}
	
	this.obtenerPartidasDisponibles=function(){
			//devolver sólo las partidas sin completar
	}
	
}

//


function Usuario(nick,juego){
	this.nick=nick;
	this.juego=juego;
	this.crearPartida=function(){
		return this.juego.crearPartida(this);
	}
	
	
	this.unirseAPartida=function(codigo){
		this.juego.unirseAPartida(codigo,this);
	}
}

function Partida(codigo,usr){
	this.codigo=codigo;
	this.owner=usr;
	this.jugadores=[]; //array normal o asociativo??
	this.fase="inicial"; //new Inicial()//array normal o asociativo??
	
	//this.maxJugadores=2
	this.agregarJugador=function(usr){
		if(this.jugadores.length<2){
			this.jugadores.push(usr);
		}
		else{
		   console.log("sala completa");	
		}
	}
	
	this.agregarJugador(this.owner);
}