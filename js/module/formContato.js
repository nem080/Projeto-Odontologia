export function initFormContato() {
    // Função para validar o formulário
    
}

const corpoForm = document.querySelector('#form-contato');
const btnEnviar = document.querySelector('#btn-from-contato');
// console.log(corpoForm, btnEnviar);

function handleSubmit(event) {
    event.preventDefault();

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
            NOME:name,
            EMAIL: email,
            MENSAGEM: msg,
            TELEFONE: telefone
        })
    });
    console.log(name, email, telefone, msg);
}

corpoForm.addEventListener('submit', handleSubmit);