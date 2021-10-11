const a = document.getElementById("map_svg");
const stadiumInfo = document.getElementById("stadium_info");
const stadiumToShow = {
  title: stadiumInfo.querySelector("h2"),
  paragraph: stadiumInfo.querySelector("p"),
  website: stadiumInfo.querySelector("a"),
  image: stadiumInfo.querySelector("img"),
};
const stadiumsList = [
  {
    title: "Jan Breydelstadion",
    paragraph:
      "Cercle Brugge & Club Brugge <br> Koning Leopold III-laan 50, 8200 Brugge",
    website: " ",
    image: "./img/stadiums/std__0_brugge_Cercle.jpg",
  },
  {
    title: "Guldensporenstadion",
    paragraph: "Meensesteenweg 84a, 8500 Kortrijk",
    website: "www.kvk.be",
    image: "./img/stadiums/std__01_Kortrijk.jpg",
  },
  {
    title: "Elindus Arena",
    paragraph: "Zuiderlaan 17, 8790 Waregem",
    website: "www.essevee.be",
    image: "./img/stadiums/std__02_Regenboogstadion.jpg",
  },
  {
    title: "Ghelamco Arena",
    paragraph: "Ottergemsesteenweg Zuid 808, 9000 Gent",
    website: "www.kaagent.be",
    image: "./img/stadiums/std__03_Gent.jpg",
  },
  {
    title: "Olympisch Stadion",
    paragraph: "Atletenstraat 80, 2020 Antwerpen",
    website: "www.beerschot.be",
    image: "./img/stadiums/std__4_Beerschot.jpg",
  },
  {
    title: "Den Bosuil",
    paragraph: "Oude Bosuilbaan 56-98, 2100 Antwerpen",
    website: "royalantwerpfc.be",
    image: "./img/stadiums/std__05_Antwerp.jpg",
  },
  {
    title: "Cegeka Arena",
    paragraph: "Stadionplein 4, 3600 Genk",
    website: "www.krcgenk.be",
    image: "./img/stadiums/std__06_Genk.jpg",
  },
  {
    title: "King Power At Den Dreef Stadion",
    paragraph: "Kardinaal Mercierlaan 46, 3001 Leuven",
    website: "www.ohl.be",
    image: "./img/stadiums/std__07_OHL Leuven.jpg",
  },
  {
    title: "Lotto Park",
    paragraph: "Théo Verbeecklaan 18, 1070 Anderlecht",
    website: "www.rsca.be",
    image: "./img/stadiums/std__08_Anderlecht.jpg",
  },
  {
    title: "Kehrweg-Stadion",
    paragraph: "Kehrweg 14, 4700 Eupen",
    website: "as-eupen.be",
    image: "./img/stadiums/std__09_Eupen.jpg",
  },
  {
    title: "AFAS Stadion",
    paragraph: "Kleine Nieuwedijkstraat 53, 2800 Mechelen",
    website: "www.kvmechelen.be",
    image: "./img/stadiums/std__0010_Mechelen.jpg",
  },
  {
    title: "Stade du Pays de Charleroi",
    paragraph: "Bd Zoé Drion 19, 6000 Charleroi",
    website: "www.sporting-charleroi.be",
    image: "./img/stadiums/std__0011_Charleroi.jpg",
  },
  {
    title: "Diaz Arena",
    paragraph: "Leopold van Tyghemlaan 62, 8400 Oostende",
    website: "www.kvo.be",
    image: "./img/stadiums/std__012.jpg",
  },
  {
    title: "Stade Joseph Marien",
    paragraph: "Brusselsesteenweg 223, 1190 Vorst",
    website: "rusg.brussels",
    image: "./img/stadiums/std__013.jpg",
  },
  {
    title: "Stade Maurice Dufrasne",
    paragraph: "Rue de la Centrale 2, 4000 Liège",
    website: "standard.be",
    image: "./img/stadiums/std__014.jpg",
  },
  {
    title: "Stade du Pairay",
    paragraph: "Rue de la Boverie 253, 4100 Seraing",
    website: "www.rfc-seraing.be",
    image: "./img/stadiums/std__015.jpg",
  },
  {
    title: "Stayen",
    paragraph: "Tiensesteenweg 168, 3800 Sint-Truiden",
    website: "www.stvv.com",
    image: "./img/stadiums/std__016.jpg",
  },
];

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
a.addEventListener(
  "load",
  function () {
    // get the inner DOM of alpha.svg
    const svgDoc = a.contentDocument;
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
          alert(
            "dot clicked with id: " + evt.target.parentElement.parentElement.id
          );
          console.log(evt.target.parentElement.parentElement.id);
        }
      },
      false
    );
  },
  false
);
