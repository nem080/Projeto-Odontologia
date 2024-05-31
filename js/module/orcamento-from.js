// orcamento-from.js
export function initFormOrcamento() {
    // Seu código aqui
}


// Função para lidar com a submissão do formulário
function handleSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Verificar se os elementos foram encontrados
    const dados_formulario = document.querySelector('#orcamento-form');
    const btnEnviarOrcamento = document.querySelector('#btn-from-orcamento');
    const msgEnvio = document.querySelector('.resposta-from');

    if (!dados_formulario || !btnEnviarOrcamento || !msgEnvio) {
        console.error('Elemento não encontrado.');
        return;
    }

    const script_do_google = 'https://sheetdb.io/api/v1/cpbykqd34sw59';
    const formData = new FormData(dados_formulario);

    // Atualizar o botão com o ícone de carregamento
    btnEnviarOrcamento.innerHTML = '<img src="../img/loadAzul.png">';

    fetch(script_do_google, {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                // Envio bem-sucedido
                confirEnvio(msgEnvio);
                dados_formulario.reset();
            } else {
                // Erro ao enviar os dados
                throw new Error('Erro ao enviar os dados!');
            }
        })
        .catch(error => {
            // Exibe a mensagem de envio
            confirEnvio(msgEnvio);
            console.error('Erro no envio dos dados:', error);
            // alert('Erro no envio dos dados. Por favor, tente novamente mais tarde.');
        })
        .finally(() => {
            // Resetar o botão após o envio
            btnEnviarOrcamento.innerHTML = 'Enviar';
        });
}

// Função para confirmar o envio com sucesso
function confirEnvio(msgEnvio) {
    msgEnvio.innerHTML = 'Dados Enviados Com Sucesso, Logo Retornaremos';
    msgEnvio.style.display = 'block';
    // opacidadeSecao(); // Certifique-se de que opacidadeSecao() está definido e acessível aqui
    setTimeout(() => {
        msgEnvio.style.display = 'none'; // Alterar a exibição da mensagem para 'none' após 7000ms
    }, 4000);
}


// Configurar o evento de submissão do formulário
const dados_formulario = document.querySelector('#orcamento-form');
dados_formulario.addEventListener('submit', handleSubmit);

initFormOrcamento()