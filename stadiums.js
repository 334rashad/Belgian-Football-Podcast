const a = document.getElementById("map_svg");

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
a.addEventListener(
  "load",
  function () {
    // get the inner DOM of alpha.svg
    const svgDoc = a.contentDocument;
    //not to color text inside SVG map we need this parent
    const svgText = svgDoc.getElementById("belgium");
    // add behaviour
    svgDoc.addEventListener(
      "mouseover",
      function (evt) {
        if (svgText.contains(evt.target)) evt.target.style.fill = "#FFF6C0";
      },
      false
    );
    svgDoc.addEventListener(
      "mouseout",
      function (evt) {
        if (svgText.contains(evt.target)) evt.target.style.fill = "#FAD443";
      },
      false
    );
  },
  false
);
