function enviarMensagem() {
    const mensagem = document.getElementById("mensagem").value; // obtém o valor do campo de texto
    const numeroDestinatario = document.getElementById("numero-destinatario").value; // obtém o número do destinatário

    // utiliza a API do navegador para enviar a mensagem
    window.open(`https://api.whatsapp.com/send?phone=${numeroDestinatario}&text=${encodeURIComponent(mensagem)}`);

    // redefine o valor dos campos de texto
    document.getElementById("mensagem").value = "";
    document.getElementById("numero-destinatario").value = "";
}
