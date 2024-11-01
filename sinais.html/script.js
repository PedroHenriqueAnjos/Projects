function verificar() {
let genero, idade, contribuição;

genero = document.getElementById('txtgenero').value;
idade = document.getElementById('txtidade').value;
contribuição = document.getElementById('txtcont').value;

if (genero =="Masculino" && idade >=63 && contribuição >= 35){
window.alert('Você pode se aposentar')
}
else if (genero =="Feminino" && idade >=58){
  window.alert('Você pode se aposentar')

}

else{
window.alert('Você não pode se aposentar')
}






}
