const frm = document.getElementById("imcForm");
const resultado = document.getElementById("resultado");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const peso = Number(frm.peso.value);
    const altura = Number(frm.altura.value);

    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        let classificacao;

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Sobrepeso";
        } else {
            classificacao = "Obesidade";
        }

        resultado.innerText = `${imc.toFixed(2)} - ${classificacao}`;
    } else {
        resultado.innerText = "Por favor, insira valores válidos.";
    }
});
