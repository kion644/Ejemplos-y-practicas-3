document.write("<h1>Hola mundo</h1>");

var nameuser = "Lio" ;
let lastname = "Lombardi" ;
var CompleteName = nameuser + " " + lastname ;

const id = 10234 ;

var numero1 = 2 ;
var numero2 = 4;
var resultado = numero1 + numero2;
var resultado2 = numero1 > numero2;
console.log (resultado);
console.log(nameuser) ;
console.log(CompleteName);
console.log(resultado2);

var contraseña = "kion64";
var input_de_contraseña = "lio123";
var resultado3 = contraseña == input_de_contraseña;
if (resultado3 == true) {console.log ("Login correcto")}
else {console.log ("Login incorrecto")} ;

let score = 13 ;
if (score > 30) { console.log ("Vas bien")}
else if (score > 70) {console.log ("LA BEESTIA")}
else { console.log ("Segui mejorando")}

let tipo_de_tarjeta = "xd";
switch (tipo_de_tarjeta) {
    case "tarjeta de debito": console.log("Tenes una tarjeta de debito") 
    break ;
case "tarjeta de credito" :  console.log("Tenes una tarjeta de credito")
break
default : console.log ("No tenes tarjeta campeon")
} ;

var contador = 50 ;

while (contador >= 0) {
    console.log (contador) ;
    contador = contador - 1
}

let nombres = ["Lio" , "Elias" , "Abril"] ;
console.log (nombres[0])
console.log (nombres.length) ;

for (var i = 0; i < nombres.length; i++ ) {
    console.log (nombres [i]) ;
    
}

function saludar (nombre1) {
    console.log ("Hola " , nombre1)
}
saludar ("Lio") ;

