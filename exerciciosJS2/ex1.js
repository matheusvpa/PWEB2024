const frm = document.querySelector("form");
const resposta = document.getElementById("resposta");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.Numero.value);

    if (numero % 2 == 0) {
        resposta.innerText = "Par";
    } else {
        resposta.innerText = "Ímpar";
    }
})
