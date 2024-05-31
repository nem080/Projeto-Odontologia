export function initFormContato() {
    const corpoForm = document.querySelector('#form-contato');
    const btnEnviar = document.querySelector('#btn-from-contato'); // Selecionar o elemento do botão, não o valor
    const msgEnvio = document.querySelector('.resposta-from');
    const secaocontato = document.querySelector('.corpo-contato');

    function opacidadeSecao() {
        secaocontato.classList.add('opacit');
    }

    function addLoading() {
        btnEnviar.innerHTML = '<img src="../img/loadAzul.png">';
    }

    function confirEnvio() {
        msgEnvio.innerHTML = 'Dados Enviados Com Sucesso, Logo Retornaremos';
        msgEnvio.style.display = 'block';
        opacidadeSecao();
        setTimeout(function () {
            msgEnvio.remove();
        }, 7000);
    }

    function removeLoading() {
        btnEnviar.innerHTML = 'Enviar';
    }

    function formatDateTime(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses são indexados de 0 a 11
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }

    function handleSubmit(event) {
        event.preventDefault();
        addLoading();

        const name = document.querySelector('input[name="nome"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const telefone = document.querySelector('input[name="telefone"]').value;
        const msg = document.querySelector('textarea[name="mensagem"]').value;

        // Captura a data e hora atuais
        const now = new Date();
        const formattedDATA_HS = formatDateTime(now); // Formata a data e hora

        fetch('https://api.sheetmonkey.io/form/dgvF4tuQp9hY8aqiujk4hi', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                NOME: name,
                EMAIL: email,
                MENSAGEM: msg,
                TELEFONE: telefone,
                DATA_HS: formattedDATA_HS // Inclui o DATA_HS formatado no corpo da solicitação
            })
        }).then(() => {
            confirEnvio();
            removeLoading();
            // Limpar os campos após o envio
            document.querySelector('input[name="nome"]').value = '';
            document.querySelector('input[name="email"]').value = '';
            document.querySelector('input[name="telefone"]').value = '';
            document.querySelector('textarea[name="mensagem"]').value = '';

            setTimeout(function () {
                location.reload();
            }, 3000);
        });
        console.log(name, email, telefone, msg, formattedDATA_HS); // Adiciona o DATA_HS ao log
    }

    corpoForm.addEventListener('submit', handleSubmit);
}
