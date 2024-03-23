const par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";

function contadorLetras(texto) {
  const contador = {};
  texto.replace(/\s/g,'').toLowerCase().split('').forEach(function(char) {
    contador[char] = (contador[char] || 0) + 1;
  });
  return contador;
}

 
console.log(contadorLetras(par));