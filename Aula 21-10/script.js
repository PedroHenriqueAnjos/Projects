function graduar() {
let nota1, nota2, nota3, nota4, nota5, nota6,
nota7, nota8, nota9, nota10, nota11,nota12, média;

nota1=document.getElementById('txtp1').value;
nota2=document.getElementById('txtp2').value;
nota3=document.getElementById('txtp3').value;
nota4=document.getElementById('txtp4').value;
nota5=document.getElementById('txtp5').value;
nota6=document.getElementById('txtp6').value;
nota7=document.getElementById('txtp7').value;
nota8=document.getElementById('txtp8').value;
nota9=document.getElementById('txtp9').value;
nota10=document.getElementById('txtp10').value;
nota11=document.getElementById('txtp11').value;
nota12=document.getElementById('txtp12').value;

nota1=Number(nota1)
nota2=Number(nota2)
nota3=Number(nota3)
nota4=Number(nota4)
nota5=Number(nota5)
nota6=Number(nota6)
nota7=Number(nota7)
nota8=Number(nota8)
nota9=Number(nota9)
nota10=Number(nota10)
nota11=Number(nota11)
nota12=Number(nota12)

média=(nota1 + nota2 + nota3 + nota4 + nota5
     + nota6 +nota7 + nota8 + nota9 + nota10 +
      nota11 + nota12)/12;




switch(true){
    case média>4 :
        window.alert('Saudável')
        break;
    case média>3:
        window.alert('Aconselhado consultar') 
        break;
    case média>2:
        window.alert('Doente') 
        break;
    case média>1:
        window.alert('Muito doente') 
        break;
    default
    :window.alert('Extremamente doente')
    break;
}


}