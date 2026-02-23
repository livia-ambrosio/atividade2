function verificarDesconto() {
    const idade = parseInt(document.getElementById("idade").value);
    const estudante = document.getElementById("estudante").checked;
    const msg = document.getElementById("mensagem");

    if (idade > 60 || estudante) {
        msg.innerText = "Você ganhou desconto";
        msg.style.color = "green";
    } else {
        msg.innerText = "Sem desconto";
        msg.style.color = "red";
    }
}