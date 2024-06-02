// export function initLerMaisSobre() {
//     const ocultarTextSobre = document.querySelector('.ocultar-sobre');
//     const btnSobre = document.querySelector('.LerMais');
//     btnSobre.addEventListener('click', btnOcultarSobre);

//     function btnOcultarSobre() {
//         ocultarTextSobre.classList.toggle('ativo');
//         if (ocultarTextSobre.classList.contains('ativo')) {
//             ocultarTextSobre.style.display = 'block';
//             btnSobre.textContent = 'Ler menos'; // Altera o texto do botão para "Ler menos"
//             btnSobre.style.color = '#0056b3';
//         } else {
//             ocultarTextSobre.style.display = 'none';
//             btnSobre.textContent = 'Ler Mais...'; // Altera o texto do botão para "Ver mais" quando oculto
//             btnSobre.style.color = '#0056b3';
//         }
//     }
// }
export function initLerMaisSobre() {
    const ocultarTextSobre = document.querySelector('.ocultar-sobre');
    const btnSobre = document.querySelector('.LerMais');
    console.log(ocultarTextSobre); // Verifica se o elemento foi encontrado
    console.log(btnSobre); // Verifica se o elemento foi encontrado

    btnSobre.addEventListener('click', btnOcultarSobre);

    function btnOcultarSobre() {
        ocultarTextSobre.classList.toggle('ativo');
        if (ocultarTextSobre.classList.contains('ativo')) {
            ocultarTextSobre.style.display = 'block';
            btnSobre.textContent = 'Ler menos';
            btnSobre.style.color = '#0056b3';
        } else {
            ocultarTextSobre.style.display = 'none';
            btnSobre.textContent = 'Ler Mais...';
            btnSobre.style.color = '#0056b3';
        }
    }
}
