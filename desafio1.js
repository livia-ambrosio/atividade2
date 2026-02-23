function validarSenha() {
    const s1 = document.getElementById("senha1").value;
    const s2 = document.getElementById("senha2").value;
    const msg = document.getElementById("mensagem");

    if (s1 === s2 && s1.length >= 8) {
        msg.innerText = "Senha válida";
        msg.style.color = "green";
    } else {
        msg.innerText = "Erro: senhas diferentes ou menos de 8 caracteres";
        msg.style.color = "red";
    }
}