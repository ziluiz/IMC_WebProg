function calcular()
{

    var masc = document.getElementById("masc");

    var fem = document.getElementById("fem");

    peso
    var peso = parseFloat(document.getElementById("peso").value);
    altura
    var altura = parseFloat(document.getElementById("altura").value);
    idade
    var idade = parseFloat(document.getElementById("idade").value);

    var imc = peso / (altura^2)

    var state;

    document.getElementById("IMC").value = imc;


        if (imc < 18,5){

            var state = "Magreza";

        }else if (imc < 24,9) {

            var state = "Normal";

        }else if (imc < 29,9){

            var state = "Sobrepeso";

        }else if (imc < 34,9){

            var state = "Obesidade grau I";

        }else if (imc < 39,9){

            var state = "Obesidade grau II";

        }else{

            var state = "Obesidade grau III";

        }


        document.getElementById("state").value = state;


}