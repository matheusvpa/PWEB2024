const frm = document.querySelector("form");
const resposta = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const Lado1 = Number(frm.lado1.value);
    const Lado2 = Number(frm.lado2.value);
    const Lado3 = Number(frm.lado3.value);

    if (Lado1 + Lado2 > Lado3 && Lado1 + Lado3 > Lado2 && Lado2 + Lado3 > Lado1) {
        let tipo;
        if (Lado1 === Lado2 && Lado2 === Lado3) {
            tipo = "Equilátero";
        } else if (Lado1 === Lado2 || Lado1 === Lado3 || Lado2 === Lado3) {
            tipo = "Isósceles";
        } else {
            tipo = "Escaleno";
        }

        resposta.innerText = `É ${tipo}.`
    } else {
        resposta.innerText = "Não é triângulo válido.";
    }
});
