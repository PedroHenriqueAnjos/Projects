function calcular() {
let nota1, nota2, resultado;

nota1 = document.getElementById('txt_var1').value;
nota2 = document.getElementById('txt_var2').value;
nota3 = document.getElementById('txt_var3').value;

nota1= Number(nota1)
nota2= Number(nota2)
nota3 = Number(nota3)

resultado = (nota1 + nota2 + nota3)/3;

document.getElementById('p').innerHTML = (resultado);


}