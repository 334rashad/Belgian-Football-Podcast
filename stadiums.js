const mapSVG = document.getElementById("map_svg");
const stadiumInfo = document.getElementById("stadium_info");
const stadiumText = document.getElementsByClassName("stadium_text");
const staiumImg = document.getElementById("stadium_image").querySelector("img");
const stadiumToShow = {
  title: stadiumInfo.querySelector("h2"),
  address: stadiumText[0].querySelector("p"),
  website: stadiumText[1].querySelector("p").querySelector("a"),
  image: staiumImg,
};
console.log(stadiumToShow.website.innerHTML);

const stadiumsList = [
  {
    title: "Jan Breydelstadion",
    address:
      "Cercle Brugge & Club Brugge <br> Koning Leopold III-laan 50, 8200 Brugge",
    website: " ",
    image: "./source/stadiums page/std__0_brugge_Cercle.jpg",
  },
  {
    title: "Guldensporenstadion",
    address: "Meensesteenweg 84a, 8500 Kortrijk",
    website: "www.kvk.be",
    image: "source/stadiums page/std__01_Kortrijk.jpg",
  },
  {
    title: "Elindus Arena",
    address: "Zuiderlaan 17, 8790 Waregem",
    website: "www.essevee.be",
    image: "source/stadiums page/std__02_Regenboogstadion.jpg",
  },
  {
    title: "Ghelamco Arena",
    address: "Ottergemsesteenweg Zuid 808, 9000 Gent",
    website: "www.kaagent.be",
    image: "./source/stadiums page/std__03_Gent.jpg",
  },
  {
    title: "Olympisch Stadion",
    address: "Atletenstraat 80, 2020 Antwerpen",
    website: "www.beerschot.be",
    image: "./source/stadiums page/std__4_Beerschot.jpg",
  },
  {
    title: "Den Bosuil",
    address: "Oude Bosuilbaan 56-98, 2100 Antwerpen",
    website: "royalantwerpfc.be",
    image: "./source/stadiums page/std__05_Antwerp.jpg",
  },
  {
    title: "Cegeka Arena",
    address: "Stadionplein 4, 3600 Genk",
    website: "www.krcgenk.be",
    image: "./source/stadiums page/std__06_Genk.jpg",
  },
  {
    title: "King Power At Den Dreef Stadion",
    address: "Kardinaal Mercierlaan 46, 3001 Leuven",
    website: "www.ohl.be",
    image: "./source/stadiums page/std__07_OHL Leuven.jpg",
  },
  {
    title: "Lotto Park",
    address: "Théo Verbeecklaan 18, 1070 Anderlecht",
    website: "www.rsca.be",
    image: "./source/stadiums page/std__08_Anderlecht.jpg",
  },
  {
    title: "Kehrweg-Stadion",
    address: "Kehrweg 14, 4700 Eupen",
    website: "as-eupen.be",
    image: "./source/stadiums page/std__09_Eupen.jpg",
  },
  {
    title: "AFAS Stadion",
    address: "Kleine Nieuwedijkstraat 53, 2800 Mechelen",
    website: "www.kvmechelen.be",
    image: "./source/stadiums page/std__0010_Mechelen.jpg",
  },
  {
    title: "Stade du Pays de Charleroi",
    address: "Bd Zoé Drion 19, 6000 Charleroi",
    website: "www.sporting-charleroi.be",
    image: "./source/stadiums page/std__0011_Charleroi.jpg",
  },
  {
    title: "Diaz Arena",
    address: "Leopold van Tyghemlaan 62, 8400 Oostende",
    website: "www.kvo.be",
    image: "./source/stadiums page/std__012.jpg",
  },
  {
    title: "Stade Joseph Marien",
    address: "Brusselsesteenweg 223, 1190 Vorst",
    website: "rusg.brussels",
    image: "./source/stadiums page/std__013.jpg",
  },
  {
    title: "Stade Maurice Dufrasne",
    address: "Rue de la Centrale 2, 4000 Liège",
    website: "standard.be",
    image: "./source/stadiums page/std__014.jpg",
  },
  {
    title: "Stade du Pairay",
    address: "Rue de la Boverie 253, 4100 Seraing",
    website: "www.rfc-seraing.be",
    image: "./source/stadiums page/std__015.jpg",
  },
  {
    title: "Stayen",
    address: "Tiensesteenweg 168, 3800 Sint-Truiden",
    website: "www.stvv.com",
    image: "./source/stadiums page/std__016.jpg",
  },
];

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
mapSVG.addEventListener(
  "load",
  function () {
    // get the inner DOM of alpha.svg
    const svgDoc = mapSVG.contentDocument;
    //not to color text inside SVG map we need this parent
    const svgText = svgDoc.getElementById("map");
    //for coloring dots in map
    const dots = svgDoc.getElementById("dots");

    // on mouseOver svg fill will change on portions of map
    svgDoc.addEventListener(
      "mouseover",
      function (evt) {
        if (svgText.contains(evt.target)) evt.target.style.fill = "#FFF6C0";
        if (dots.contains(evt.target)) {
          evt.target.style.fill = "#FAD443";
          evt.target.style.r = "16";
          evt.target.style.strokeWidth = "7";
          //to keep color of map parts even when mouse is over the dots
          switch (evt.target.parentElement.parentElement.id) {
            case "Component_5_26":
              svgDoc.getElementById("BE-VAN").style.fill = "#FFF6C0";
              break;
            case "Component_5_27":
              svgDoc.getElementById("BE-VLI").style.fill = "#FFF6C0";
              break;
            case "Component_5_29":
              svgDoc.getElementById("east_flanders").style.fill = "#FFF6C0";
              break;
            case "Component_5_24":
              svgDoc.getElementById("BE-VWV").style.fill = "#FFF6C0";
              break;
            case "Component_5_25":
              svgDoc.getElementById("BE-VWV").style.fill = "#FFF6C0";
              break;
            case "Component_5_15":
              svgDoc.getElementById("BE-VBR").style.fill = "#FFF6C0";
              break;
            case "Component_5_17":
              svgDoc.getElementById("BE-WHT").style.fill = "#FFF6C0";
              break;
            case "Component_5_18":
              svgDoc.getElementById("BE-WHT").style.fill = "#FFF6C0";
              break;
            case "Component_5_19":
              svgDoc.getElementById("BE-WHT").style.fill = "#FFF6C0";
              break;
            case "Component_5_16":
              svgDoc.getElementById("BE-WBR").style.fill = "#FFF6C0";
              break;
            case "Component_5_28":
              svgDoc.getElementById("liege").style.fill = "#FFF6C0";
              break;
            case "Component_5_20":
              svgDoc.getElementById("BE-WNA").style.fill = "#FFF6C0";
              break;
            case "Component_5_21":
              svgDoc.getElementById("BE-WLX").style.fill = "#FFF6C0";
              break;
            case "Component_5_22":
              svgDoc.getElementById("BE-WLX").style.fill = "#FFF6C0";
              break;
            case "Component_5_23":
              svgDoc.getElementById("BE-WLX").style.fill = "#FFF6C0";
              break;
            default:
              console.log("no such element");
          }
        }
      },
      false
    );
    svgDoc.addEventListener(
      "mouseout",
      function (evt) {
        if (svgText.contains(evt.target)) evt.target.style.fill = "#FAD443";
        if (dots.contains(evt.target)) {
          evt.target.style.fill = "#FFF";
          evt.target.style.r = "13";
          evt.target.style.strokeWidth = "3";
          // some dots in between of two map parts make problem, this improves bug
          switch (evt.target.parentElement.parentElement.id) {
            case "Component_5_26":
              svgDoc.getElementById("BE-VAN").style.fill = "#FAD443";
              break;
            case "Component_5_27":
              svgDoc.getElementById("BE-VLI").style.fill = "#FAD443";
              break;
            case "Component_5_29":
              svgDoc.getElementById("east_flanders").style.fill = "#FAD443";
              break;
            case "Component_5_24":
              svgDoc.getElementById("BE-VWV").style.fill = "#FAD443";
              break;
            case "Component_5_25":
              svgDoc.getElementById("BE-VWV").style.fill = "#FAD443";
              break;
            case "Component_5_15":
              svgDoc.getElementById("BE-VBR").style.fill = "#FAD443";
              break;
            case "Component_5_17":
              svgDoc.getElementById("BE-WHT").style.fill = "#FAD443";
              break;
            case "Component_5_18":
              svgDoc.getElementById("BE-WHT").style.fill = "#FAD443";
              break;
            case "Component_5_19":
              svgDoc.getElementById("BE-WHT").style.fill = "#FAD443";
              break;
            case "Component_5_16":
              svgDoc.getElementById("BE-WBR").style.fill = "#FAD443";
              break;
            case "Component_5_28":
              svgDoc.getElementById("liege").style.fill = "#FAD443";
              break;
            case "Component_5_20":
              svgDoc.getElementById("BE-WNA").style.fill = "#FAD443";
              break;
            case "Component_5_21":
              svgDoc.getElementById("BE-WLX").style.fill = "#FAD443";
              break;
            case "Component_5_22":
              svgDoc.getElementById("BE-WLX").style.fill = "#FAD443";
              break;
            case "Component_5_23":
              svgDoc.getElementById("BE-WLX").style.fill = "#FAD443";
              break;
            default:
              console.log("no such element");
          }
        }
      },
      false
    );
    svgDoc.addEventListener(
      "click",
      function (evt) {
        if (dots.contains(evt.target)) {
          console.log(evt.target.parentElement.parentElement.id);
          switch (evt.target.parentElement.parentElement.id) {
            case "Component_5_15":
              stadiumToShow.title.innerHTML = stadiumsList[7].title;
              stadiumToShow.address.innerHTML = stadiumsList[7].address;
              stadiumToShow.website.innerHTML = stadiumsList[7].website;
              stadiumToShow.website.setAttribute(
                "href",
                "https://" + stadiumsList[7].website
              );
              stadiumToShow.image.src = stadiumsList[7].image;
              break;
            case "Component_5_16":
              svgDoc.getElementById("BE-WBR").style.fill = "#FAD443";
              break;
            case "Component_5_17":
              svgDoc.getElementById("BE-WHT").style.fill = "#FAD443";
              break;
            case "Component_5_18":
              svgDoc.getElementById("BE-WHT").style.fill = "#FAD443";
              break;
            case "Component_5_19":
              svgDoc.getElementById("BE-WHT").style.fill = "#FAD443";
              break;
            case "Component_5_20":
              svgDoc.getElementById("BE-WNA").style.fill = "#FAD443";
              break;
            case "Component_5_21":
              svgDoc.getElementById("BE-WLX").style.fill = "#FAD443";
              break;
            case "Component_5_22":
              svgDoc.getElementById("BE-WLX").style.fill = "#FAD443";
              break;
            case "Component_5_23":
              svgDoc.getElementById("BE-WLX").style.fill = "#FAD443";
              break;
            case "Component_5_24":
              stadiumToShow.title.innerHTML = stadiumsList[2].title;
              stadiumToShow.address.innerHTML = stadiumsList[2].address;
              stadiumToShow.website.innerHTML = stadiumsList[2].website;
              stadiumToShow.website.setAttribute(
                "href",
                "https://" + stadiumsList[2].website
              );
              stadiumToShow.image.src = stadiumsList[2].image;
              break;
            case "Component_5_25":
              stadiumToShow.title.innerHTML = stadiumsList[1].title;
              stadiumToShow.address.innerHTML = stadiumsList[1].address;
              stadiumToShow.website.innerHTML = stadiumsList[1].website;
              stadiumToShow.website.setAttribute(
                "href",
                "https://" + stadiumsList[1].website
              );
              stadiumToShow.image.src = stadiumsList[1].image;
              break;
            case "Component_5_26":
              stadiumToShow.title.innerHTML = stadiumsList[5].title;
              stadiumToShow.address.innerHTML = stadiumsList[5].address;
              stadiumToShow.website.innerHTML = stadiumsList[5].website;
              stadiumToShow.website.setAttribute(
                "href",
                "https://" + stadiumsList[5].website
              );
              stadiumToShow.image.src = stadiumsList[5].image;
              break;
            case "Component_5_27":
              svgDoc.getElementById("BE-VLI").style.fill = "#FAD443";
              break;
            case "Component_5_28":
              svgDoc.getElementById("liege").style.fill = "#FAD443";
              break;
            case "Component_5_29":
              stadiumToShow.title.innerHTML = stadiumsList[3].title;
              stadiumToShow.address.innerHTML = stadiumsList[3].address;
              stadiumToShow.website.innerHTML = stadiumsList[3].website;
              stadiumToShow.website.setAttribute(
                "href",
                "https://" + stadiumsList[3].website
              );
              stadiumToShow.image.src = stadiumsList[3].image;
              break;
            default:
              console.log("no such element");
          }
        }
      },
      false
    );
  },
  false
);
