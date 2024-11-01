function conta(){
var valor, pessoas, resultado;

valor = document.getElementById('txt_valor').value;
pessoas = document.getElementById('txt_pessoas').value;

valor =Number(valor);
pessoas=Number(pessoas);
resultado = (valor + (100 * 0.1)) / pessoas;

document.getElementById('p').innerHTML = ('R$' + resultado.toFixed(2));

}