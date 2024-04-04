export function initVerMaisBlog(){
    const ocultarText = document.querySelector('.ocultar');
    const btnBlog = document.querySelector('#btn-blog');

    btnBlog.addEventListener('click', btnOcultar);

    function btnOcultar() {
        ocultarText.classList.toggle('ativo');
        if (ocultarText.classList.contains('ativo')) {
            ocultarText.style.display = 'block';
        } else {
            ocultarText.style.display = 'none';
        }
    }
}


