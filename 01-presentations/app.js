// dados de reviews locais
const presentation = [
  {
    id: 1,
    name: "leonardo brito",
    job: "Programador WEB, Mobile e Desktop",
    img:
      "https://media-exp1.licdn.com/dms/image/C4D03AQEYUE9Qtb_n5A/profile-displayphoto-shrink_800_800/0/1611092686613?e=1674691200&v=beta&t=yE0cSMJX1z5FCciTPGAWp3qiap-aej2gfihRZH-Na9o",
    text:
      "Programador com conhecimentos em Javascript, HTML, CSS, Python, C# .Net, Flutter/Dart. Com excelente lógica de programação e fácil aprendizado. https://www.linkedin.com/in/leonardobritoti",
  },
  {
    id: 2,
    name: "isabela alvarenga",
    job: "arquiteta",
    img:
      "https://iuploads.scribblecdn.net/ffe8e2ab-75f9-4bb4-99d8-d622902e2419/global/imagelib/buyer_persona_builder/artboard_4-8f7f2f4bc137e2a6cbc56019616283c3ea2e5bbc.png?v=03252021195339",
    text:
      "Ad voluptas vero et repudiandae laborum vel unde consequuntur eos minima similique? Ex totam ipsum non autem quod vel impedit quia et error quidem ut nostrum soluta est doloribus voluptatem."
  },
  {
    id: 3,
    name: "marcelo rangel",
    job: "desenvolvedor web",
    img:
      "https://iuploads.scribblecdn.net/ffe8e2ab-75f9-4bb4-99d8-d622902e2419/global/imagelib/buyer_persona_builder/artboard_6-8f7f2f4bc137e2a6cbc56019616283c3ea2e5bbc.png?v=03252021194917",
    text:
      "Est nisi laudantium et exercitationem quia qui nobis laborum sit nisi accusamus aut labore tempora aut eius autem. Ex neque consequuntur nam fugit distinctio est nihil dolores id nihil rerum.",
  },
  {
    id: 4,
    name: "lana mont ",
    job: "Designer de Interiores",
    img:
      "https://iuploads.scribblecdn.net/ffe8e2ab-75f9-4bb4-99d8-d622902e2419/global/imagelib/buyer_persona_builder/artboard_9-8f7f2f4bc137e2a6cbc56019616283c3ea2e5bbc.png?v=03252021195426",
    text:
      "Sou apaixonado por design, designs limpos, simples e inteligentes. Trabalho como designer há 8 anos. Meu design é sempre a melhor solução para sua casa aconchegante."
  },
  {
    id: 5,
    name: "sandra duarte",
    job: "administradora",
    img:
      "https://iuploads.scribblecdn.net/ffe8e2ab-75f9-4bb4-99d8-d622902e2419/global/imagelib/buyer_persona_builder/artboard_11-8f7f2f4bc137e2a6cbc56019616283c3ea2e5bbc.png?v=03252021194909",
    text:
      "Olá! Meu nome é Sandra. Eu sou originalmente da Itália, mas atualmente moro em Londres.. Apaixonada pelo que faz e sempre presando pelo convivio social harmônico.  ",
  },
];
// select items
const img = document.getElementById("person-img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = presentation[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = presentation[person];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > presentation.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = presentation.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * presentation.length);
  showPerson(currentItem);
});
