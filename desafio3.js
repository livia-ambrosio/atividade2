function validarBouncer() {
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const msg = document.getElementById("mensagem");

    if (nome === "" || idade < 0) {
        msg.innerText = "Erro: dados inválidos 🚫";
        msg.style.color = "red";
    } else {
        msg.innerText = "Acesso permitido ✅";
        msg.style.color = "green";
    }
}