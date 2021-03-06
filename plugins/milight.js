exports.action = function (data, callback, config, SARAH) {
	
	// DEBUG
	var infodebug=true;
	
	// Recuperation de la config
	config = config.modules.milight;
	if (config.MiLight_ip == "[FIXME]"){
		console.log("La variable MiLight_ip n'est pas configuree");
		return callback({'tts' : "La variable, Mi Light,  IP, n'est pas configurée."});
	}

	if (config.MiLight_port == "[FIXME - Default : 8899]"){
		console.log("La variable MiLight_port n'est pas configuree");
		return callback({'tts' : "La variable, Mi Light,  port, n'est pas configurée."});
	}

if (data.action) {
	var led = require('./lib/index');
	var con = led.createSocket({host:config.MiLight_ip,port:config.MiLight_port},'udp');
	var mytime=0;
	var deltatime=100;
	commandes=data.action;
	// Gestion des REPEAT_ON
	var rgxp = new RegExp('REPEAT_ON(.+?)REPEAT_OFF', 'gm'); 
	var match = commandes.match(rgxp);
		if (match){
			match.forEach( function(cmd) {
				Temp=cmd.split(",");
				nb=parseInt(Temp[0].split(".")[1]);
				Temp.shift();
				Temp.pop();
				NewTemp=[];
				for (i=0; i<nb;i++) {
					NewTemp=NewTemp.concat(Temp);
				}
				replace=NewTemp.join();
				var rgxp2 = new RegExp(cmd, 'g'); 
				commandes = commandes.replace(rgxp2, replace);
			});
		}

	commandes.split(",").forEach(function (cmd, index) {
		if (isNaN(parseInt(cmd))) {									// Command
			mytime=mytime+deltatime;
			var tempcommand;
			tempcommand=cmd.split(".");
			if ((typeof(led[tempcommand[0]])=="undefined")||(typeof(led[tempcommand[0]][tempcommand[1]])=="undefined")) {console.log('Plugin MiLight - Commande inconnue:'+cmd);}
			else if (typeof(led[tempcommand[0]][tempcommand[1]])!="undefined") {
				setTimeout(function () {
					if (infodebug) {var stringcommand=tempcommand[0]+'.'+tempcommand[1];} else {var stringcommand=""}
					if(tempcommand[1]=="REPEAT"){console.log('Plugin MiLight - Repeter la commande suivante ' + tempcommand[2] + ' fois.');}
					if(tempcommand[1].indexOf('SET_COLOR_') > -1) {
						if(tempcommand[0]=="RGBW") 
							con.sendcolorRGBW(stringcommand,led[tempcommand[0]][tempcommand[1]]);
						if(tempcommand[0]=="RGB") 
							con.sendcolorRGB(stringcommand,led[tempcommand[0]][tempcommand[1]]);
					}
					else if(tempcommand[1].indexOf('SET_BRIGHTNESS_') > -1)
						con.sendbrightness(stringcommand,led[tempcommand[0]][tempcommand[1]]);
					else
						con.send(stringcommand,led[tempcommand[0]][tempcommand[1]]);
				}, mytime);
			}
			deltatime=100;
		}
		else														// Tempo
			{deltatime=parseInt(cmd);}
	});

}

if (data.hexacommand) {
	
	var led = require('./lib/index');
	var con = led.createSocket({host:config.MiLight_ip,port:config.MiLight_port},'udp');
	con.send("commande Hexa",data.hexacommand);

}

callback();
}


