const frm = document.querySelector("form");
const resposta = document.querySelector("h2");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const v1 = Number(frm.nota1.value)
    const v2 = Number(frm.nota2.value)
    const v3 = Number(frm.nota3.value)

    const media = (v1 + v2 + v3)/3

        if(media >= 7){
            resposta.innerText = `Aprovado!` 
        }
        else if(media >= 4 && media <= 7){
            resposta.innerText = `Você está de recuperação` 
        }
        else{
            resposta.innerText = `Reprovado` 
        }
})