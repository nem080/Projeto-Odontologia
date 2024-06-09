export function initVerMaisBlog() {
    const ocultarText = document.querySelector('.ocultar');
    const btnBlog = document.querySelector('#btn-blog');

    btnBlog.addEventListener('click', btnOcultar);

    function btnOcultar() {
        ocultarText.classList.toggle('ativo');
        if (ocultarText.classList.contains('ativo')) {
            ocultarText.style.display = 'block';
            btnBlog.textContent = 'Ler menos'; // Altera o texto do botão para "Ler menos"
        } else {
            ocultarText.style.display = 'none';
            btnBlog.textContent = 'Continuar a ler...'; // Altera o texto do botão para "Ver mais" quando oculto
        }
    }
}
