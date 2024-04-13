export function initSecaoSeletor(){

    window.scrollToSection = function (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    }
}







// function scrollToSection(sectionId) {
//     const section = document.getElementById(sectionId);
//     if (section) {
//         window.scrollTo({
//             top: section.offsetTop,
//             behavior: 'smooth'
//         });
//     }
// }