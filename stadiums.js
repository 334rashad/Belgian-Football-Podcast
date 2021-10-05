const a = document.getElementById("map_svg");

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
          alert(evt.target + " dot clicked");
          console.log(evt.target.parentElement.parentElement.id);
        }
      },
      false
    );
  },
  false
);
