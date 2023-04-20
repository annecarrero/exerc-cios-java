function cubo() {
  let numero = document.getElementById("numero").value;
  let cubo = numero ** 3;
  document.getElementById("resultado1").innerHTML = "O cubo de " + numero + " é " + cubo;
}


function converter() {
  let fahrenheit = document.getElementById("fahrenheit").value;
  let celsius = (fahrenheit - 32) * 5/9;
  document.getElementById("resultado2").innerHTML = fahrenheit + "°F equivalem a " + celsius.toFixed(2) + "°C";
}


function calcularAreaTriangulo() {
  let base = document.getElementById("base").value;
  let altura = document.getElementById("altura").value;
  let area = (base * altura) / 2;
  document.getElementById("resultado3").innerHTML = "A área do triângulo é " +  area.toFixed(2);
}


function calcularCirculo() {
  let raio = document.getElementById("raio").value;
  let area2 = Math.PI * Math.pow(raio, 2);
  let perimetro = 2 * Math.PI * raio;
  document.getElementById("resultado4").innerHTML = "A área do círculo é " + area2.toFixed(2) +  " e o perímetro é "  + perimetro.toFixed(2);
}


function calcularDesconto() {
  let valor = document.getElementById("valor").value;
  let desconto = valor * 0.05;
  document.getElementById("resultado").innerHTML = "Desconto de R$" +desconto.toFixed(2);
}


function calcularCombustivel() {
  let dinheiro = document.getElementById("dinheiro").value;
  let litros = dinheiro / 5; 
  let km = litros * 20; 
  
  document.getElementById("dinheiro-digitado").innerHTML = dinheiro;
  document.getElementById("litros").innerHTML = litros.toFixed(2);
  document.getElementById("km").innerHTML = km.toFixed(2);
}
