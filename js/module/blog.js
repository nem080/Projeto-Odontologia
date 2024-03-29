export function initBlog(){
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector('.ler-mais').addEventListener('click', function () {
            document.querySelector('.esconder').style.display = 'block';
            this.style.display = 'none';
        });
    });
}