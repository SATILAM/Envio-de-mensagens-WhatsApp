# Formulário de envio de mensagens para o WhatsApp.

Um simples projeto HTML,CSS e JAVASCRIPT. O código JavaScript define uma função chamada "enviarMensagem". 

Esta função é acionada por um evento em um botão ou formulário, por exemplo, e serve para enviar uma mensagem via WhatsApp.

A função começa obtendo o valor de dois campos de entrada no HTML: a mensagem e o número do destinatário. 

Esses valores são armazenados em duas constantes locais chamadas "mensagem" e "numeroDestinatario", respectivamente.

A função usa a API do navegador para abrir uma nova janela com um URL específico.

Esse URL é construído a partir de uma string que inclui o número do destinatário e a mensagem que será enviada, 
codificada para que possa ser transmitida com segurança.

A função, portanto, utiliza a API do WhatsApp para enviar a mensagem. Quando o usuário clica no link,
o WhatsApp é aberto com a mensagem preenchida, permitindo que o usuário envie a mensagem.

E no final, a função redefine o valor dos campos de entrada para ficarem em branco, prontos para uma nova mensagem ser enviada.

No CSS, possui animações nas bordas dos formulários e uma imagem de fundo do body como background-image.



https://user-images.githubusercontent.com/101275634/236250916-556f983c-a08b-43b7-ba9f-78fa483e5489.mp4

Obs: O vídeo não possui áudio.

https://satilam.github.io/Envio-de-mensagens-WhatsApp/
