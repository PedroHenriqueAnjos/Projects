function Registrar() {

    let genero, idade;

    genero = document.getElementById('op1').value;
    idade = document.getElementById('txt_idade').value;

    idade = Number(idade);


    if (genero == "Feminino"){
        document.getElementById('result').textContent = "Alistamento Opcional";

    }

    else if (idade>=18){
         document.getElementById('result').textContent = "Alistamento Obrigatório"

    }


    else{
        document.getElementById('result').textContent = "Fora do prazo de alistamento"

    }
}