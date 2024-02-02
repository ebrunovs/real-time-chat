const botaoEnviar = document.getElementById('enviar');
const caixaDeMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    if (caixaDeMensagem.value !== ""){
        socket.emit('nova mensagem', caixaDeMensagem.value);
        caixaDeMensagem.value = "";
    }
});

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li'); //<li></li>
    elementoMensagem.textContent = msg; //<li>Olaaaa</li>
    elementoMensagem.classList.add('mensagem'); //<li class="mensagem">Olaaaa</li>
    chat.appendChild(elementoMensagem); // <div class="mensagens">//<li class="mensagem">Olaaaa</li></div>
})