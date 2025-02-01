function Contar(){
let num;
num = document.getElementById('txt_num').value;

num = Number(num)

if(num%2){

    window.alert('Número Impar')

}

else{
    window.alert('Número Par')
}

}