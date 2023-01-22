import data from "./data/lol/lol.js";
import { sortData } from "./data.js";
import { filterData } from "./data.js";
import { computeStats } from "./data.js";

const sortedArray = data.data;
const arrayDataChampion = Object.values(sortedArray);

loadChampionsList(arrayDataChampion, "ascendente");

function filter(champions) {
  const queryParams = new URLSearchParams(location.search);
  const tipoCampeon = queryParams.get("tipo");

  const filteredChampions = filterData(champions, (champion) => {
    const tags = champion.tags.map((item) => item.toLowerCase());
    return !tipoCampeon || tags.includes(tipoCampeon);
  });

  return filteredChampions;
}

// FUNCION RENDERIZAR TARJETAS DE CAMPEONES:

function renderCardChampions(champions) {
  const mainEl = document.getElementById("champions-list1");
  const templateCard = document.getElementById("card");

  mainEl.textContent = "";

  for (const champion of champions) {
    const cloneTemplate = document.importNode(templateCard.content, true);
    const card = cloneTemplate.querySelector("#cards");
    card.id = `card-${champion.id}`;
    const img = cloneTemplate.querySelector("#image-card");
    const name = cloneTemplate.querySelector("#name-card");
    img.src = champion.splash;
    name.textContent = champion.name;

    mainEl.appendChild(cloneTemplate);

    card.addEventListener("click", () => {
      loadChampionDetails(champion);
    });
  }
}


// FUNCION PARA CARGAR DATA DE CAMPEONES ORDENADA:

function loadChampionsList(champions, sortOrder) {
  const sortedChampions = sortData(champions, "name", sortOrder);
  const filterChampions = filter(sortedChampions);
  renderCardChampions(filterChampions);
}

// SELECT EVENT PARA ORDENAR ALFABETICAMENTE: 

const selectElement = document.querySelector(".select");
selectElement.addEventListener("change", (event) => {
  loadChampionsList(arrayDataChampion, event.target.value);
});


//FUNCION PARA CARGAR VISTA DE DEL DETALLE DE CAMPEONES:

function loadChampionDetails(champion) {
  const championDetail = document.getElementById("champion-detail");
  const mainEl = document.getElementById("champions-list1");
  const sectionFilter = document.querySelector(".filter");
  const selectElement = document.querySelector(".select");
  const templateChampionDetail = document.getElementById("championDetail");

  championDetail.style.display = "block";
  mainEl.style.display = "none";
  sectionFilter.style.display = "none";
  selectElement.style.display = "none";
  const cloneTemplateChampion = document.importNode(
    templateChampionDetail.content,
    true
  );

  const background = cloneTemplateChampion.querySelector("#img-bg");
  const divTitle = cloneTemplateChampion.querySelector("#title-title");
  const divName = cloneTemplateChampion.querySelector("#name");
  const pDescriptionText =
    cloneTemplateChampion.querySelector("#description-text");

  background.src = champion.splash;
  background.alt = champion.name;
  divTitle.textContent = champion.title.toUpperCase();
  divName.textContent = champion.name.toUpperCase();
  pDescriptionText.textContent = champion.blurb;

  const statisticsDifficultyEl = document.getElementById(
    "statistics-difficulty"
  );

  const statisticsContainer =
    cloneTemplateChampion.querySelector("#statistics");

  for (const status of ["difficulty", "attack", "defense", "magic"]) {
    const statisticsDifficultyTemplate = document.importNode(
      statisticsDifficultyEl.content,
      true
    );

    const statisticalTextEl =
      statisticsDifficultyTemplate.querySelector(".statistical-text");

    statisticalTextEl.textContent = `${status.toUpperCase()}: ${
      champion.info[status]
    }`;

    const graphicEl = statisticsDifficultyTemplate.querySelector(".graphic");

    for (let i = 0; i < champion.info[status]; i++) {
      // console.log('grafico', i);
      const graphicSpan = document.createElement("span");
      graphicSpan.className = "container1";
      graphicEl.appendChild(graphicSpan);
    }

    statisticsContainer.appendChild(statisticsDifficultyTemplate);
  }

  const divAverage = cloneTemplateChampion.querySelector(".average");
  const average = computeStats([
    champion.info.attack,
    champion.info.defense,
    champion.info.difficulty,
    champion.info.magic,
  ]);
  divAverage.textContent = `AVERAGE: ${average}`;

  championDetail.appendChild(cloneTemplateChampion);
}



// const queryParams = new URLSearchParams(location.search);
// const tipoCampeon = queryParams.get("tipo");

// const templateCard = document.getElementById("card");
// const mainEl = document.getElementById("champions-list1");
// const championDetail = document.getElementById("champion-detail");
// const sectionFilter = document.querySelector(".filter");
// const templateChampionDetail = document.getElementById("championDetail");


// FUNCION PARA FILTRAR CAMPEONES:

//

// for (const key in sortedArray) {
//   const champion = sortedArray[key];
//   const tags = champion.tags.map((item) => item.toLowerCase());

//   if (!tipoCampeon || tags.includes(tipoCampeon)) {
//     const cloneTemplate = document.importNode(templateCard.content, true);
//     const card = cloneTemplate.querySelector("#cards");
//     card.id = `card-${key}`;
//     const img = cloneTemplate.querySelector("#image-card");
//     const name = cloneTemplate.querySelector("#name-card");
//     img.src = champion.splash;
//     name.textContent = champion.id;
//     mainEl.appendChild(cloneTemplate);

//     // Funcionalidad del detalle del campeón:

//     card.addEventListener("click", () => {
//       loadChampionDetails(champion);
//     });
//   }
// }


