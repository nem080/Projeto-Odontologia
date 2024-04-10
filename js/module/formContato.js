export function initFormContato() {
    const corpoForm = document.querySelector('#form-contato');
    const btnEnviar = document.querySelector('#btn-from-contato'); // Selecionar o elemento do botão, não o valor
    const msgEnvio = document.querySelector('.resposta-from')
    const secaocontato = document.querySelector('.corpo-contato');

    // console.log(secaocontato);

    function opacidadeSecao() {
        secaocontato.classList.add('opacit');
    }
    // opacidadeSecao()
    function addLoading() {
        btnEnviar.innerHTML = '<img src="../img/loadAzul.png">';
    }

    function confirEnvio() {
        msgEnvio.innerHTML = 'Dados Enviado Com Sucesso, Logo Retornaremos'
        msgEnvio.style.display = 'block'
        opacidadeSecao()
        setTimeout(function () {
            msgEnvio.remove();
        }, 7000);
    }


    function removeLoading() {
        btnEnviar.innerHTML = 'Enviar';
    }

    function handleSubmit(event) {
        event.preventDefault();
        addLoading()
        const name = document.querySelector('input[name="nome"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const telefone = document.querySelector('input[name="telefone"]').value;
        const msg = document.querySelector('textarea[name="mensagem"]').value;

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
                TELEFONE: telefone
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
;                location.reload();
            }, 3000);
        });
        console.log(name, email, telefone, msg);
    }

    corpoForm.addEventListener('submit', handleSubmit);

}

