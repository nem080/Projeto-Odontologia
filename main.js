(() => {
  "use strict"; // Ativa modo estrito para evitar erros silenciosos

  // Função para controlar os cards de serviço e botão "Ver mais"
  function e() {
    const e = document.querySelectorAll(".card-servico"), // Seleciona todos os cards
      t = document.querySelector(".btn-verMais"); // Seleciona o botão "Ver mais"
    t
      ? (e.forEach((e, t) => {
          t >= 3 && (e.style.display = "none"); // Esconde todos os cards a partir do 4º
        }),
        t.addEventListener("click", function () {
          // Ao clicar no botão
          (e.forEach((e, t) => {
            t >= 3 && (e.style.display = "block"); // Mostra os cards escondidos
          }),
            "Ver mais" === this.textContent
              ? (this.textContent = "Ver menos") // Alterna texto do botão
              : (this.textContent = "Ver mais"));
        }))
      : console.error("Elemento .btn-verMais não encontrado."); // Caso não exista o botão
  }



  // Executa a função quando o DOM estiver carregado
  document.addEventListener("DOMContentLoaded", (t) => {
    e();
  });

  // Controle do menu mobile (hambúrguer)
  document
    .querySelector(".menu-toggle")
    .addEventListener("click", function () {
      document.querySelector(".menu-mobile").classList.toggle("active"); // Abre/fecha menu
    });

  // Fecha menu ao clicar fora dele
  document.addEventListener("click", function (e) {
    const t = document.querySelector(".menu-mobile");
    document.querySelector(".menu-toggle").contains(e.target) ||
      t.contains(e.target) ||
      t.classList.remove("active");
  });

  // Fecha menu ao clicar em um link dentro dele
  document.querySelectorAll(".menu-mobile ul li a").forEach(function (e) {
    e.addEventListener("click", function () {
      document.querySelector(".menu-mobile").classList.remove("active");
    });
  });

  e(); // Executa novamente a função dos cards

  // Botão "Continuar a ler..." no blog
  (function () {
    const e = document.querySelector(".ocultar"), // Conteúdo escondido
      t = document.querySelector("#btn-blog"); // Botão
    t.addEventListener("click", function () {
      e.classList.toggle("ativo"); // Alterna classe ativo
      e.classList.contains("ativo")
        ? ((e.style.display = "block"), (t.textContent = "Ler menos"))
        : ((e.style.display = "none"),
          (t.textContent = "Continuar a ler..."));
    });
  })();

  // Formulário de contato
  (function () {
    const e = document.querySelector("#form-contato"),
      t = document.querySelector("#btn-from-contato"),
      o = document.querySelector(".resposta-from"),
      n = document.querySelector(".corpo-contato");

    e.addEventListener("submit", function (e) {
      e.preventDefault(); // Impede envio padrão
      t.innerHTML = '<img src="../img/loadAzul.png">'; // Mostra ícone de carregamento

      // Captura valores dos campos
      const c = document.querySelector('input[name="nome"]').value,
        r = document.querySelector('input[name="email"]').value,
        a = document.querySelector('input[name="telefone"]').value,
        i = document.querySelector('textarea[name="mensagem"]').value;

      // Gera data/hora atual formatada
      var l = new Date();
      const u = `${String(l.getDate()).padStart(2, "0")}/${String(
        l.getMonth() + 1
      ).padStart(2, "0")}/${l.getFullYear()} ${String(l.getHours()).padStart(
        2,
        "0"
      )}:${String(l.getMinutes()).padStart(2, "0")}:${String(
        l.getSeconds()
      ).padStart(2, "0")}`;

      // Envia dados para API SheetMonkey
      fetch("https://api.sheetmonkey.io/form/dgvF4tuQp9hY8aqiujk4hi", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          NOME: c,
          EMAIL: r,
          MENSAGEM: i,
          TELEFONE: a,
          DATA_HS: u,
        }),
      }).then(() => {
        // Ao concluir envio
        o.innerHTML = "Dados Enviados Com Sucesso, Logo Retornaremos";
        o.style.display = "block";
        n.classList.add("opacit"); // Aplica efeito visual
        setTimeout(function () {
          o.remove(); // Remove mensagem após 7s
        }, 7000);
        t.innerHTML = "Enviar"; // Restaura botão
        // Limpa campos
        document.querySelector('input[name="nome"]').value = "";
        document.querySelector('input[name="email"]').value = "";
        document.querySelector('input[name="telefone"]').value = "";
        document.querySelector('textarea[name="mensagem"]').value = "";
        // Recarrega página após 3s
        setTimeout(function () {
          location.reload();
        }, 3000);
      });

      console.log(c, r, a, i, u); // Log dos dados
    });
  })();

  // Scroll suave para links de âncora
  document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelectorAll('a[href^="#"]');
    for (const o of e) o.addEventListener("click", t);

    function t(e) {
      e.preventDefault();
      const t = this.getAttribute("href"),
        o = document.querySelector(t).offsetTop;
      scroll({ top: o, behavior: "smooth" }); // Scroll suave
    }
  });

  // Função global para scroll até seção específica
  window.scrollToSection = function (e) {
    const t = document.getElementById(e);
    t && window.scrollTo({ top: t.offsetTop, behavior: "smooth" });
  };
})();
