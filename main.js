const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});


/* ==============================
   MODAL DINÂMICA - CURSOS
================================= */

const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

/* BANCO DE DADOS DOS CURSOS */
const cursos = {

empregabilidade:{
  title:"Empregabilidade e Inteligências",
  img:"assets/curso-1.png",
  desc:"Formação completa para desenvolver inteligência emocional, visão estratégica e domínio tecnológico, preparando profissionais para um mercado cada vez mais digital, competitivo e orientado por Inteligência Artificial.",
  hours:"⏱ 190 horas",
  modulos:"📚 11 formações integradas",
  aulas:"🎬 Conteúdo prático e aplicado",
  reviews:"(24 Avaliações)",
  publico:[
    "Profissionais que desejam aumentar a empregabilidade",
    "Estudantes que querem se destacar no mercado atual",
    "Empreendedores que buscam visão estratégica e tecnológica"
  ],
  learn:[
    "Uso prático da Inteligência Artificial nos negócios",
    "Domínio do Pacote Office e ferramentas digitais",
    "Inteligência emocional aplicada à carreira",
  ],
  benefits:[
    "🎓 Certificação profissional completa",
    "🚀 Formação humana e tecnológica integrada",
    "🧠 Desenvolvimento emocional e estratégico",
    "📚 Material didático progressivo por mentoria"
  ]
},

 gamer:{
  title:"Carreira Gamer",
  img:"assets/curso-2.png",
  desc:"Formação profissional para criar, programar e publicar jogos 3D e online, transformando a paixão por games em uma carreira na indústria digital.",
  hours:"⏱ 115 horas",
  modulos:"📚 5 módulos",
  aulas:"🎬 Mentorias práticas",
  reviews:"(Formação profissional completa)",
  publico:[
    "Amantes de jogos que querem transformar hobby em carreira",
    "Interessados em programação e design de games",
    "Criadores independentes de jogos"
  ],
  learn:[
    "Desenvolvimento de games 3D",
    "Programação de jogos online",
    "Criação de personagens e cenários"
  ],
  benefits:[
    "🎓 Certificação profissional",
    "🎮 Criação e publicação de jogos",
    "🚀 Preparação para o mercado gamer",
    "💻 Material didático e mentorias"
  ]
},

designer:{
  title:"Designer de Oportunidades",
  img:"assets/curso-3.png",
  desc:"Formação profissional para criar identidade visual, estratégias digitais e transformar criatividade em oportunidades reais de crescimento profissional e financeiro.",
  hours:"⏱ 136 horas",
  modulos:"📚 10 módulos",
  aulas:"🎬 Mentorias práticas",
  reviews:"(Formação profissional completa)",
  publico:[
    "Empreendedores e profissionais criativos",
    "Interessados em design gráfico e marketing digital",
    "Pessoas que desejam iniciar um negócio criativo"
  ],
  learn:[
    "Design gráfico profissional",
    "Marketing digital e posicionamento",
    "Empreendedorismo e uso de IA"
  ],
  benefits:[
    "🎓 Certificação profissional",
    "🎨 Domínio de ferramentas de design",
    "🚀 Estratégias de marketing e negócios",
    "💻 Material didático e mentorias"
  ]
},

ingles:{
  title:"English for Career Success",
  img:"assets/curso-4.png",
  desc:"Formação em inglês profissional voltada para comunicação estratégica em ambientes internacionais, negócios, turismo e carreira global.",
  hours:"⏱ 184 horas",
  modulos:"📚 3 módulos",
  aulas:"🎬 Mentorias práticas",
  reviews:"(Formação profissional completa)",
  publico:[
    "Profissionais que buscam carreira internacional",
    "Estudantes que desejam ampliar empregabilidade",
    "Empreendedores e profissionais do turismo e negócios"
  ],
  learn:[
    "Inglês para negócios e apresentações",
    "Comunicação profissional internacional",
    "Inglês aplicado a viagens e atendimento global"
  ],
  benefits:[
    "🎓 Certificação profissional",
    "🌎 Inglês aplicado ao mercado global",
    "🚀 Comunicação estratégica internacional",
    "💻 Material didático e mentorias"
  ]
},
programacao:{
  title:"Programação para o Sucesso Profissional",
  img:"assets/curso-5.png",
  desc:"Formação completa em programação e análise de dados, desenvolvendo sistemas, automações e soluções tecnológicas alinhadas às demandas do mercado.",
  hours:"⏱ 114 horas",
  modulos:"📚 5 módulos",
  aulas:"🎬 Mentorias práticas",
  reviews:"(Formação profissional completa)",
  publico:[
    "Iniciantes em programação e tecnologia",
    "Profissionais em transição para TI",
    "Empreendedores que desejam automatizar processos"
  ],
  learn:[
    "Lógica de programação",
    "Desenvolvimento com Java e PHP",
    "Python e análise de dados",
    "Business Intelligence com Power BI"
  ],
  benefits:[
    "🎓 Certificação profissional",
    "💻 Desenvolvimento de sistemas reais",
    "🚀 Preparação para o mercado tech",
    "📊 Programação e análise de dados"
  ]
},
trilha:{
  title:"Trilha do Sucesso Profissional",
  img:"assets/curso-6.png",
  desc:"Formação completa para desenvolver competências profissionais, comunicação estratégica e preparo para conquistar oportunidades no mercado de trabalho.",
  hours:"⏱ 98 horas",
  modulos:"📚 7 módulos",
  aulas:"🎬 Mentorias práticas",
  reviews:"(Formação profissional completa)",
  publico:[
    "Jovens em busca do primeiro emprego",
    "Profissionais em recolocação",
    "Pessoas que desejam crescimento profissional"
  ],
  learn:[
    "Marketing pessoal e empregabilidade",
    "Comunicação e apresentação profissional",
    "Pacote Office (Word, Excel e PowerPoint)"
  ],
  benefits:[
    "🎓 Certificação profissional",
    "🚀 Preparação para o mercado de trabalho",
    "💼 Desenvolvimento de carreira",
    "📊 Domínio de ferramentas corporativas"
  ]
},

};

/* ELEMENTOS DA MODAL */
const titleEl = document.querySelector(".modal-title");
const starsEl = document.querySelector(".modal-stars");
const reviewsEl = document.querySelector(".modal-reviews");
const imgEl = document.querySelector(".modal-img");
const descEl = document.querySelector(".modal-desc");
const hoursEl = document.querySelector(".modal-hours");
const modulosEl = document.querySelector(".modal-modulos");
const aulasEl = document.querySelector(".modal-aulas");
const publicoEl = document.querySelector(".modal-publico");
const learnEl = document.querySelector(".modal-learn");
const benefitsEl = document.querySelector(".modal-benefits");

/* ABRIR MODAL */
document.querySelectorAll(".destination__card").forEach(card=>{

  card.addEventListener("click",()=>{

    const id = card.dataset.curso;
    const curso = cursos[id];

    if(!curso) return;

    titleEl.textContent = curso.title;
    reviewsEl.textContent = curso.reviews;
    imgEl.src = curso.img;
    descEl.textContent = curso.desc;
    hoursEl.textContent = curso.hours;
    modulosEl.textContent = curso.modulos;
    aulasEl.textContent = curso.aulas;

    publicoEl.innerHTML="";
    curso.publico.forEach(item=>{
      publicoEl.innerHTML += `<li>${item}</li>`;
    });

    learnEl.innerHTML="";
    curso.learn.forEach(item=>{
      learnEl.innerHTML += `<li>✔ ${item}</li>`;
    });

    benefitsEl.innerHTML="";
    curso.benefits.forEach(item=>{
      benefitsEl.innerHTML += `<div class="benefit">${item}</div>`;
    });

    modal.classList.add("active");

  });

});

/* FECHAR */


function fecharModal(){
  modal.classList.remove("active");
}

closeBtn.onclick = fecharModal;

modal.onclick = (e)=>{
  if(e.target === modal){
    fecharModal();
  }
}



