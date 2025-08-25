// const { createElement } = require("react");

// EXERCICE 1 :
const exo1 = document.querySelector("#exo-1");
const h2exo1 = exo1.querySelector("h2");
const pexo1 = exo1.querySelector("#ex1-text");
const buttonexo1 = exo1.querySelector("#ex1-btn");

buttonexo1.addEventListener("click", changerLeTexte);

const h2Original = h2exo1.innerText;
const pOriginal = pexo1.innerText;
const buttonOriginal = buttonexo1.innerText;

let exo1Modifie = false;

function changerLeTexte() {
  if (!exo1Modifie) {
    h2exo1.innerText = "Exercice 1";
    pexo1.innerText = "L'objectif est de changer du contenu d'éléments HTML";
    buttonexo1.innerText = "Annuler";
    exo1Modifie = true;
  } else {
    h2exo1.innerText = h2Original;
    pexo1.innerText = pOriginal;
    buttonexo1.innerText = buttonOriginal;
    exo1Modifie = false;
  }
}

// EXERCICE 2 :
const exo2 = document.querySelector("#exo-2");
const exo2Grid = exo2.querySelector(".mini-grid");
const cards = exo2Grid.querySelectorAll(".mini-card");
const exo2Output = exo2.querySelector("#ex2-output");
const buttonexo2 = document.querySelector("#ex2-btn");
let exo2Modifie = false;

buttonexo2.addEventListener("click", afficherNombre);

function afficherNombre() {
  if (!exo2Modifie) {
    const nbCards = cards.length;
    exo2Output.innerText = `Il y a ${nbCards} éléments`;
    exo2Modifie = true;
  } else {
    exo2Output.innerText = "";
    exo2Modifie = false;
  }
}

// EXERCICE 3 :
const exo3 = document.querySelector("#exo-3");
const exo3Input = exo3.querySelector("#ex3-input");
const exo3Span = exo3.querySelector("#ex3-mirror");
exo3Input.addEventListener("input", ecrireSaisi);

function ecrireSaisi(event) {
  exo3Span.innerText = event.target.value;
}

// EXERCICE 4-5 :
const exo4 = document.querySelector("#exo-4");
const exo4Input = exo4.querySelector("#ex4-new");
const exo4Button = exo4.querySelector("#ex4-add");
const exo4List = exo4.querySelector("#ex4-list");

exo4Button.addEventListener("click", ajouterAListe);
exo4Input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    ajouterAListe();
  }
});

exo4List.addEventListener("click", (event) => {
  if (event.target.matches(".ex4-remove-btn")) {
    const li = event.target.closest("li");
    li.remove();
  }
});

function ajouterAListe() {
  const value = exo4Input.value;
  exo4Input.value = "";
  exo4Input.focus();

  if (!value) {
  } else {
    const exo4li = document.createElement("li");
    const exo4RemoveButton = document.createElement("button");
    exo4li.innerText = value;
    exo4li.classList.add("ex4-li");
    exo4List.appendChild(exo4li);
    exo4li.appendChild(exo4RemoveButton);
    exo4RemoveButton.innerText = "Supprimer";
    exo4RemoveButton.classList.add("ex4-remove-btn");
  }
}

// EXERCICE 6 :
const exo6 = document.querySelector("#exo-6");
const exo6BtnModal = exo6.querySelector("#ex6-open");
const exo6Modal = exo6.querySelector("#ex6-overlay");
const exo6BtnClose = exo6.querySelector("#ex6-close");
const dialog = exo6.querySelector(".modal");

let lastFocus = null;

exo6BtnModal.addEventListener("click", () => {
  exo6Modal.classList.remove("hidden");
});

exo6BtnClose.addEventListener("click", () => {
  exo6Modal.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    exo6Modal.classList.add("hidden");
  }
});

// EXERCICE 7 :
const exo7 = document.querySelector("#exo-7");
const exo7Box = exo7.querySelector("#ex7-box");
const exo7Btn = exo7.querySelector("#ex7-toggle");

exo7Btn.addEventListener("click", () => {
  exo7Box.classList.toggle("active");
});

// EXERCICE 8 :
const exo8 = document.querySelector("#exo-8");
const exo8Main = exo8.querySelector("#ex8-main");
const vignettes = exo8.querySelectorAll(".thumb");

exo8.addEventListener("click", (event) => {
  if (event.target.matches(".thumb")) {
    const mainSource = event.target.dataset.src;
    exo8Main.src = mainSource;
  }
});

// EXERCICE 9 :
const exo9 = document.querySelector("#exo-9");
const exo9cards = exo9.querySelectorAll(".mini-card");

exo9.addEventListener("click", (event) => {
  if (event.target.matches(".mini-card")) {
    const dataId = event.target.dataset.id;
    console.log(`Tu as cliqué sur la carte ${dataId}`);
  }
});

// EXERCICE 10 : a revoir
const exo10 = document.querySelector("#exo-10");
const exo10Name = exo10.querySelector("#ex10-name");
const exo10Mail = exo10.querySelector("#ex10-email");
const exo10Form = exo10.querySelector("#ex10-form");
const exo10Btn = exo10.querySelector("button");
const exo10ErrorName = exo10.querySelector("#ex10-name-error");
const exo10ErrorMail = exo10.querySelector("#ex10-email-error");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let nameTouch = false;
let mailTouch = false;

function exo10validate() {
  const valName = exo10Name.value;
  const valMail = exo10Mail.value;
  const nameOK = valName.length > 0;
  const mailOK = emailRegex.test(valMail);

  if (nameTouch) {
    exo10ErrorName.textContent = nameOK ? "" : "Veuillez renseigner votre nom";
  }
  if (mailTouch) {
    if (!valMail) {
      exo10ErrorMail.textContent = "Veuillez rentrer votre mail";
    } else {
      exo10ErrorMail.textContent = mailOK ? "" : "mail invalide";
    }
    exo10Btn.disabled = !(mailOK && nameOK);
  }
}

exo10Name.addEventListener("input", () => {
  nameTouch = true;
  exo10validate();
});
exo10Mail.addEventListener("input", () => {
  mailTouch = true;
  exo10validate();
});

exo10Form.addEventListener("submit", (e) => {
  if (exo10Btn.disabled) {
    e.preventDefault();
    exo10validate();
    return;
  }
  e.preventDefault();
  console.log("Formulaire valide", {
    nom: exo10Name.value,
    mail: exo10Mail.value,
  });
});

exo10Btn.disabled = true;

// EXERCICE 11
const exo11 = document.querySelector("#exo-11");
const exo11Onglet = exo11.querySelectorAll(".tab");
const exo11Panels = exo11.querySelectorAll(".panel");

exo11.addEventListener("click", (event) => {
  if (event.target.matches(".tab")) {
    const exo11IdTarget = event.target.dataset.target;
    const exo11PanelTarget = exo11.querySelector(exo11IdTarget);
    console.log(exo11IdTarget);
    console.log(exo11PanelTarget);
    console.log(event.target);

    exo11Onglet.forEach((o) => o.classList.remove("active"));
    exo11Panels.forEach((p) => p.classList.remove("active"));

    exo11PanelTarget.classList.add("active");
    event.target.classList.add("active");
  }
});

//EXERCICE 12
const exo12 = document.querySelector("#exo-12");
const exo12Valeur = exo12.querySelector("#ex12-value");
const exo12Plus = exo12.querySelector("#ex12-inc");
const exo12Moins = exo12.querySelector("#ex12-dec");
const exo12Reset = exo12.querySelector("#ex12-reset");

let exo12ValeurAffiche = parseInt(exo12Valeur.innerText);

function incremente() {
  exo12ValeurAffiche++;
  exo12Valeur.innerText = exo12ValeurAffiche;
}
function decremente() {
  if (exo12ValeurAffiche > 0) {
    exo12ValeurAffiche--;
  }
  exo12Valeur.innerText = exo12ValeurAffiche;
}
function reset() {
  exo12ValeurAffiche = 0;
  exo12Valeur.innerText = exo12ValeurAffiche;
}

exo12Plus.addEventListener("click", incremente);
exo12Moins.addEventListener("click", decremente);
exo12Reset.addEventListener("click", reset);

//EXERCICE 13 :
const exo13 = document.querySelector("#exo-13");
const exo13Btn = exo13.querySelector("#ex13-btn");
const exo13Frere2 = exo13.querySelector("#ex13-target");

let styleModifie = false;

exo13Btn.addEventListener("click", () => {
  const exo13Frere1 = exo13Frere2.previousElementSibling;
  const exo13Frere3 = exo13Frere2.nextElementSibling;

  if (!styleModifie) {
    exo13Frere1.style.background = "red";
    exo13Frere2.style.color = "blue";
    exo13Frere3.style.fontWeight = "bold";
    styleModifie = !styleModifie;
  } else {
    exo13Frere1.style.cssText = "";
    exo13Frere2.style.cssText = "";
    exo13Frere3.style.cssText = "";
    styleModifie = !styleModifie;
  }
});

//EXERCICE 14 :
const exo14 = document.querySelector("#exo-14");
const exo14Container = exo14.querySelector("#ex14-container");
const exo14Cards = exo14.querySelectorAll(".mini-card");
const exo14Badge = exo14.querySelector("#ex14-badge");

const exo14NbCard = exo14Cards.length;
exo14Badge.innerText = exo14NbCard;

//EXERCICE 15 : nouveau pour moi
const exo15 = document.querySelector("#exo-15");
const exo15Template = exo15.querySelector("#ex15-template");
const exo15Target = exo15.querySelector("#ex15-target");

const exo15Products = [
  {
    title: "Clavier mécanique",
    price: 79.9,
    img: "https://picsum.photos/seed/kb/400/240",
  },
  {
    title: "Souris sans fil",
    price: 29.9,
    img: "https://picsum.photos/seed/mouse/400/240",
  },
  {
    title: 'Écran 27"',
    price: 249,
    img: "https://picsum.photos/seed/monitor/400/240",
  },
];

for (const item of exo15Products) {
  const exo15Clone = exo15Template.content.cloneNode(true);

  const exo15Img = exo15Clone.querySelector(".product-img");
  const exo15Titre = exo15Clone.querySelector(".product-title");
  const exo15Price = exo15Clone.querySelector(".product-price");
  exo15Img.src = item.img;
  exo15Img.alt = item.title;
  exo15Titre.textContent = item.title;
  exo15Price.textContent = item.price;
  exo15Target.appendChild(exo15Clone);
}

//EXERCICE 16 : nouveau pour moi
const exo16 = document.querySelector("#exo-16");
const exo16Btn = exo16.querySelector("#ex16-generate");
const exo16List = exo16.querySelector("#ex16-list");

let listeGenere = false;

exo16Btn.addEventListener("click", () => {
  if (!listeGenere) {
    const exo16Fragment = document.createDocumentFragment();
    listeGenere = !listeGenere;
    for (let i = 0; i <= 100; i++) {
      const exo16Li = document.createElement("li");
      exo16Li.textContent = `Item ${i}`;
      exo16Fragment.appendChild(exo16Li);
    }
    exo16List.appendChild(exo16Fragment);
  } else {
    exo16List.replaceChildren();
    listeGenere = !listeGenere;
  }
});

//EXERCICE 17 : nouveau pour moi
const exo17 = document.querySelector("#exo-17");
const exo17Item = exo17.querySelectorAll(".acc-item");
const exo17Btn = exo17.querySelectorAll(".acc-header");
const exo13Content = exo17.querySelectorAll(".acc-panel");

let ongletOpen = false;

exo17.addEventListener("click", (event) => {
  if (!event.target.matches(".acc-header")) return;

  const itemTarget = event.target.closest(".acc-item");
  const isOpen = itemTarget.classList.contains("open");
  exo17Item.forEach((item) => {
    item.classList.remove("open");
  });

  if (!isOpen) itemTarget.classList.add("open");
});

//EXERCICE 18 : nouveau pour moi
const exo18 = document.querySelector("#exo-18");
const exo18Input = exo18.querySelector("#ex18-search");
const ex18Card = exo18.querySelectorAll(".mini-card");

exo18Input.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim().toLowerCase();
  ex18Card.forEach((card) => {
    const datasetCard = card.dataset.title.toLowerCase();
    const match = datasetCard.includes(inputValue);
    card.style.display = match ? "" : "none";
  });
});

//EXERCICE 19 : nouveau pour moi
const exo19 = document.querySelector("#exo-19");
const exo19List = exo19.querySelector("#ex19-list");

let elementDrague = null;

exo19List.addEventListener("dragstart", (event) => {
  const exo19Element = event.target.closest("li");
  if (!exo19Element) return;
  elementDrague = exo19Element;
  exo19Element.classList.add("dragging");
});

exo19List.addEventListener("dragover", (event) => {
  event.preventDefault();

  const elementSurvole = getInsertionPoint(exo19List, event.clientY);
  if (!elementSurvole) exo19List.appendChild(elementDrague);
  else exo19List.insertBefore(elementDrague, elementSurvole);
});

exo19List.addEventListener("drop", () => {
  if (elementDrague) elementDrague.classList.remove("dragging");
  elementDrague = null;
});

function getInsertionPoint(list, mouseY) {
  const elementNonDrague = [...list.querySelectorAll("li:not(.dragging)")];

  return (
    elementNonDrague.find((element) => {
      const rectangle = element.getBoundingClientRect();
      const middle = rectangle.top + rectangle.height / 2;
      return mouseY < middle;
    }) || null
  );
}

//EXERCICE 20 : nouveau pour moi
const exo20 = document.querySelector("#exo-20");
const barreScroll = document.querySelector("#scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; // combien on a défilé
  const docHeight = document.documentElement.scrollHeight; // hauteur totale du doc
  const winHeight = window.innerHeight; // hauteur de la fenêtre
  const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

  barreScroll.style.width = scrollPercent + "%";
});

// const { createElement } = require("react");

// EXERCICE 1 :
const exo1 = document.querySelector("#exo-1");
const h2exo1 = exo1.querySelector("h2");
const pexo1 = exo1.querySelector("#ex1-text");
const buttonexo1 = exo1.querySelector("#ex1-btn");

buttonexo1.addEventListener("click", changerLeTexte);

const h2Original = h2exo1.innerText;
const pOriginal = pexo1.innerText;
const buttonOriginal = buttonexo1.innerText;

let exo1Modifie = false;

function changerLeTexte() {
  if (!exo1Modifie) {
    h2exo1.innerText = "Exercice 1";
    pexo1.innerText = "L'objectif est de changer du contenu d'éléments HTML";
    buttonexo1.innerText = "Annuler";
    exo1Modifie = true;
  } else {
    h2exo1.innerText = h2Original;
    pexo1.innerText = pOriginal;
    buttonexo1.innerText = buttonOriginal;
    exo1Modifie = false;
  }
}

// EXERCICE 2 :
const exo2 = document.querySelector("#exo-2");
const exo2Grid = exo2.querySelector(".mini-grid");
const cards = exo2Grid.querySelectorAll(".mini-card");
const exo2Output = exo2.querySelector("#ex2-output");
const buttonexo2 = document.querySelector("#ex2-btn");
let exo2Modifie = false;

buttonexo2.addEventListener("click", afficherNombre);

function afficherNombre() {
  if (!exo2Modifie) {
    const nbCards = cards.length;
    exo2Output.innerText = `Il y a ${nbCards} éléments`;
    exo2Modifie = true;
  } else {
    exo2Output.innerText = "";
    exo2Modifie = false;
  }
}

// EXERCICE 3 :
const exo3 = document.querySelector("#exo-3");
const exo3Input = exo3.querySelector("#ex3-input");
const exo3Span = exo3.querySelector("#ex3-mirror");
exo3Input.addEventListener("input", ecrireSaisi);

function ecrireSaisi(event) {
  exo3Span.innerText = event.target.value;
}

// EXERCICE 4-5 :
const exo4 = document.querySelector("#exo-4");
const exo4Input = exo4.querySelector("#ex4-new");
const exo4Button = exo4.querySelector("#ex4-add");
const exo4List = exo4.querySelector("#ex4-list");

exo4Button.addEventListener("click", ajouterAListe);
exo4Input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    ajouterAListe();
  }
});

exo4List.addEventListener("click", (event) => {
  if (event.target.matches(".ex4-remove-btn")) {
    const li = event.target.closest("li");
    li.remove();
  }
});

function ajouterAListe() {
  const value = exo4Input.value;
  exo4Input.value = "";
  exo4Input.focus();

  if (value.trim()) {
  } else {
    const exo4li = document.createElement("li");
    const exo4RemoveButton = document.createElement("button");
    exo4li.innerText = value;
    exo4li.classList.add("ex4-li");
    exo4List.appendChild(exo4li);
    exo4li.appendChild(exo4RemoveButton);
    exo4RemoveButton.innerText = "Supprimer";
    exo4RemoveButton.classList.add("ex4-remove-btn");
  }
}

// EXERCICE 6 :
const exo6 = document.querySelector("#exo-6");
const exo6BtnModal = exo6.querySelector("#ex6-open");
const exo6Modal = exo6.querySelector("#ex6-overlay");
const exo6BtnClose = exo6.querySelector("#ex6-close");
const dialog = exo6.querySelector(".modal");

let lastFocus = null;

exo6BtnModal.addEventListener("click", () => {
  exo6Modal.classList.remove("hidden");
});

exo6BtnClose.addEventListener("click", () => {
  exo6Modal.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    exo6Modal.classList.add("hidden");
  }
});

// EXERCICE 7 :
const exo7 = document.querySelector("#exo-7");
const exo7Box = exo7.querySelector("#ex7-box");
const exo7Btn = exo7.querySelector("#ex7-toggle");

exo7Btn.addEventListener("click", () => {
  exo7Box.classList.toggle("active");
});

// EXERCICE 8 :
const exo8 = document.querySelector("#exo-8");
const exo8Main = exo8.querySelector("#ex8-main");
const vignettes = exo8.querySelectorAll(".thumb");

exo8.addEventListener("click", (event) => {
  if (event.target.matches(".thumb")) {
    const mainSource = event.target.dataset.src;
    exo8Main.src = mainSource;
  }
});

// EXERCICE 9 :
const exo9 = document.querySelector("#exo-9");
const exo9cards = exo9.querySelectorAll(".mini-card");

exo9.addEventListener("click", (event) => {
  if (event.target.matches(".mini-card")) {
    const dataId = event.target.dataset.id;
    console.log(`Tu as cliqué sur la carte ${dataId}`);
  }
});

// EXERCICE 10 : a revoir
const exo10 = document.querySelector("#exo-10");
const exo10Name = exo10.querySelector("#ex10-name");
const exo10Mail = exo10.querySelector("#ex10-email");
const exo10Form = exo10.querySelector("#ex10-form");
const exo10Btn = exo10.querySelector("button");
const exo10ErrorName = exo10.querySelector("#ex10-name-error");
const exo10ErrorMail = exo10.querySelector("#ex10-email-error");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let nameTouch = false;
let mailTouch = false;

function exo10validate() {
  const valName = exo10Name.value;
  const valMail = exo10Mail.value;
  const nameOK = valName.length > 0;
  const mailOK = emailRegex.test(valMail);

  if (nameTouch) {
    exo10ErrorName.textContent = nameOK ? "" : "Veuillez renseigner votre nom";
  }
  if (mailTouch) {
    if (!valMail) {
      exo10ErrorMail.textContent = "Veuillez rentrer votre mail";
    } else {
      exo10ErrorMail.textContent = mailOK ? "" : "mail invalide";
    }
    exo10Btn.disabled = !(mailOK && nameOK);
  }
}

exo10Name.addEventListener("input", () => {
  nameTouch = true;
  exo10validate();
});
exo10Mail.addEventListener("input", () => {
  mailTouch = true;
  exo10validate();
});

exo10Form.addEventListener("submit", (e) => {
  if (exo10Btn.disabled) {
    e.preventDefault();
    exo10validate();
    return;
  }
  e.preventDefault();
  console.log("Formulaire valide", {
    nom: exo10Name.value,
    mail: exo10Mail.value,
  });
});

exo10Btn.disabled = true;

// EXERCICE 11
const exo11 = document.querySelector("#exo-11");
const exo11Onglet = exo11.querySelectorAll(".tab");
const exo11Panels = exo11.querySelectorAll(".panel");

exo11.addEventListener("click", (event) => {
  if (event.target.matches(".tab")) {
    const exo11IdTarget = event.target.dataset.target;
    const exo11PanelTarget = exo11.querySelector(exo11IdTarget);
    console.log(exo11IdTarget);
    console.log(exo11PanelTarget);
    console.log(event.target);

    exo11Onglet.forEach((o) => o.classList.remove("active"));
    exo11Panels.forEach((p) => p.classList.remove("active"));

    exo11PanelTarget.classList.add("active");
    event.target.classList.add("active");
  }
});

//EXERCICE 12
const exo12 = document.querySelector("#exo-12");
const exo12Valeur = exo12.querySelector("#ex12-value");
const exo12Plus = exo12.querySelector("#ex12-inc");
const exo12Moins = exo12.querySelector("#ex12-dec");
const exo12Reset = exo12.querySelector("#ex12-reset");

let exo12ValeurAffiche = parseInt(exo12Valeur.innerText);

function incremente() {
  exo12ValeurAffiche++;
  exo12Valeur.innerText = exo12ValeurAffiche;
}
function decremente() {
  if (exo12ValeurAffiche > 0) {
    exo12ValeurAffiche--;
  }
  exo12Valeur.innerText = exo12ValeurAffiche;
}
function reset() {
  exo12ValeurAffiche = 0;
  exo12Valeur.innerText = exo12ValeurAffiche;
}

exo12Plus.addEventListener("click", incremente);
exo12Moins.addEventListener("click", decremente);
exo12Reset.addEventListener("click", reset);

//EXERCICE 13 :
const exo13 = document.querySelector("#exo-13");
const exo13Btn = exo13.querySelector("#ex13-btn");
const exo13Frere2 = exo13.querySelector("#ex13-target");

let styleModifie = false;

exo13Btn.addEventListener("click", () => {
  const exo13Frere1 = exo13Frere2.previousElementSibling;
  const exo13Frere3 = exo13Frere2.nextElementSibling;

  if (!styleModifie) {
    exo13Frere1.style.background = "red";
    exo13Frere2.style.color = "blue";
    exo13Frere3.style.fontWeight = "bold";
    styleModifie = !styleModifie;
  } else {
    exo13Frere1.style.cssText = "";
    exo13Frere2.style.cssText = "";
    exo13Frere3.style.cssText = "";
    styleModifie = !styleModifie;
  }
});

//EXERCICE 14 :
const exo14 = document.querySelector("#exo-14");
const exo14Container = exo14.querySelector("#ex14-container");
const exo14Cards = exo14.querySelectorAll(".mini-card");
const exo14Badge = exo14.querySelector("#ex14-badge");

const exo14NbCard = exo14Cards.length;
exo14Badge.innerText = exo14NbCard;

//EXERCICE 15 : nouveau pour moi
const exo15 = document.querySelector("#exo-15");
const exo15Template = exo15.querySelector("#ex15-template");
const exo15Target = exo15.querySelector("#ex15-target");

const exo15Products = [
  {
    title: "Clavier mécanique",
    price: 79.9,
    img: "https://picsum.photos/seed/kb/400/240",
  },
  {
    title: "Souris sans fil",
    price: 29.9,
    img: "https://picsum.photos/seed/mouse/400/240",
  },
  {
    title: 'Écran 27"',
    price: 249,
    img: "https://picsum.photos/seed/monitor/400/240",
  },
];

for (const item of exo15Products) {
  const exo15Clone = exo15Template.content.cloneNode(true);

  const exo15Img = exo15Clone.querySelector(".product-img");
  const exo15Titre = exo15Clone.querySelector(".product-title");
  const exo15Price = exo15Clone.querySelector(".product-price");
  exo15Img.src = item.img;
  exo15Img.alt = item.title;
  exo15Titre.textContent = item.title;
  exo15Price.textContent = item.price;
  exo15Target.appendChild(exo15Clone);
}

//EXERCICE 16 : nouveau pour moi
const exo16 = document.querySelector("#exo-16");
const exo16Btn = exo16.querySelector("#ex16-generate");
const exo16List = exo16.querySelector("#ex16-list");

let listeGenere = false;

exo16Btn.addEventListener("click", () => {
  if (!listeGenere) {
    const exo16Fragment = document.createDocumentFragment();
    listeGenere = !listeGenere;
    for (let i = 0; i <= 100; i++) {
      const exo16Li = document.createElement("li");
      exo16Li.textContent = `Item ${i}`;
      exo16Fragment.appendChild(exo16Li);
    }
    exo16List.appendChild(exo16Fragment);
  } else {
    exo16List.replaceChildren();
    listeGenere = !listeGenere;
  }
});

//EXERCICE 17 : nouveau pour moi
const exo17 = document.querySelector("#exo-17");
const exo17Item = exo17.querySelectorAll(".acc-item");
const exo17Btn = exo17.querySelectorAll(".acc-header");
const exo13Content = exo17.querySelectorAll(".acc-panel");

let ongletOpen = false;

exo17.addEventListener("click", (event) => {
  if (!event.target.matches(".acc-header")) return;

  const itemTarget = event.target.closest(".acc-item");
  const isOpen = itemTarget.classList.contains("open");
  exo17Item.forEach((item) => {
    item.classList.remove("open");
  });

  if (!isOpen) itemTarget.classList.add("open");
});

//EXERCICE 18 : nouveau pour moi
const exo18 = document.querySelector("#exo-18");
const exo18Input = exo18.querySelector("#ex18-search");
const ex18Card = exo18.querySelectorAll(".mini-card");

exo18Input.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim().toLowerCase();
  ex18Card.forEach((card) => {
    const datasetCard = card.dataset.title.toLowerCase();
    const match = datasetCard.includes(inputValue);
    card.style.display = match ? "" : "none";
  });
});

//EXERCICE 19 : nouveau pour moi
const exo19 = document.querySelector("#exo-19");
const exo19List = exo19.querySelector("#ex19-list");

let elementDrague = null;

exo19List.addEventListener("dragstart", (event) => {
  const exo19Element = event.target.closest("li");
  if (!exo19Element) return;
  elementDrague = exo19Element;
  exo19Element.classList.add("dragging");
});

exo19List.addEventListener("dragover", (event) => {
  event.preventDefault();

  const elementSurvole = getInsertionPoint(exo19List, event.clientY);
  if (!elementSurvole) exo19List.appendChild(elementDrague);
  else exo19List.insertBefore(elementDrague, elementSurvole);
});

exo19List.addEventListener("drop", () => {
  if (elementDrague) elementDrague.classList.remove("dragging");
  elementDrague = null;
});

function getInsertionPoint(list, mouseY) {
  const elementNonDrague = [...list.querySelectorAll("li:not(.dragging)")];

  return (
    elementNonDrague.find((element) => {
      const rectangle = element.getBoundingClientRect();
      const middle = rectangle.top + rectangle.height / 2;
      return mouseY < middle;
    }) || null
  );
}

//EXERCICE 20 : nouveau pour moi
const exo20 = document.querySelector("#exo-20");
const barreScroll = document.querySelector("#scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; // combien on a défilé
  const docHeight = document.documentElement.scrollHeight; // hauteur totale du doc
  const winHeight = window.innerHeight; // hauteur de la fenêtre
  const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

  barreScroll.style.width = scrollPercent + "%";
});
