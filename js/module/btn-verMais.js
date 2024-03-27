export function initBtnVerMais(){
    const cards = document.querySelectorAll('.card-servico');
    const btnVerMais = document.querySelector('.btn-verMais');
 
    // Ocultar todos os cards exceto os três primeiros
    cards.forEach((card, index) => {
        if (index >= 3) {
            card.style.display = 'none';
        }
    });

    // Adicionar evento de clique ao botão
    btnVerMais.addEventListener('click', function () {
        cards.forEach((card, index) => {
            if (index >= 3) {
                // Alternar a visibilidade dos cards ocultos
                card.style.display === 'none' ? card.style.display = 'block' : card.style.display = 'none';
            }
        });

        // Alterar o texto do botão
        this.textContent === 'Ver mais' ? this.textContent = 'Ver menos' : this.textContent = 'Ver mais';
    });
}


