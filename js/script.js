import { initMenuMobile } from './module/menu-mobile.js';
import { initBtnVerMais } from './module/btn-verMais.js';
import { initVerMaisBlog } from './module/btn-blog-ver-mais.js';
import { initFormContato } from './module/formContato.js';
import { initScrollSuave } from './module/scroll-suave.js';
import { initSecaoSeletor } from './module/seletor-secao.js';
// import { initFormOrcamento } from './module/orcamento-from.js';
// import { SlideNav } from './module/slide-sobre.js';


initMenuMobile();
initBtnVerMais();
initVerMaisBlog();
initFormContato();
initScrollSuave();
initSecaoSeletor();
// initFormOrcamento();

// import SlideNav from './module/slide-sobre.js'; // Importando a classe padrão exportada

// const slide = new SlideNav('.slide', '.slide-wrapper');
// slide.init();
// slide.addControl('.custom-controls');