const linkNotificacao = document.getElementById('link-notificacao');
const abaNotificacao = document.getElementById('aba-notificacao');

linkNotificacao.addEventListener('click', function (event) {
    event.preventDefault();
    if (abaNotificacao.style.display === 'none' || abaNotificacao.style.display === '') {
        abaNotificacao.style.display = 'block';
    } else {
        abaNotificacao.style.display = 'none';
    }
});

function fecharAba() {
    abaNotificacao.style.display = 'none';
}