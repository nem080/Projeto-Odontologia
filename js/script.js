// document.querySelector('.menu-toggle').addEventListener('click', function () {
//     document.querySelector('.menu-mobile').classList.toggle('active');
// });

import { initMenuMobile } from './module/menu-mobile.js';
import {initBtnVerMais} from './module/btn-verMais.js'
import { initVerMaisBlog } from './module/btn-blog-ver-mais.js'
import { initFormContato } from './module/formContato.js'

// form - contato

initMenuMobile();
initBtnVerMais();
initVerMaisBlog();
initFormContato();
