alert('Te damos la bienvenidad a Oro Negro, para saber mas de ti, ¿nos responderias unas preguntas?');
var nombre = prompt ('Por favor indicanos tu nombre:','');
var variedad = prompt ('Contanos cual es tu variedad de café predilecta:','');
var momento = prompt ('En que momento del dia te gusta tomar café:','');
var compania = prompt ('Compartirías ese momento con:','' );
var ciudad = prompt ('Cual es la ciudad que te gustaría visitar:','');

document.write(nombre + ' toma café ' + variedad + ' por la ' + momento +' en compañia de '+ compania + ' en la ciudad de '+ ciudad);