const a = document.getElementById("map_svg");

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
a.addEventListener(
  "load",
  function () {
    // get the inner DOM of alpha.svg
    const svgDoc = a.contentDocument;
    // get the inner element by id
    let antwerp = svgDoc.getElementById("antwerp");
    // add behaviour
    antwerp.addEventListener(
      "mouseover",
      function (e) {
        svgDoc.getElementById("east_flanders").style.fill = "red";
      },
      false
    );
    antwerp.addEventListener(
      "mouseout",
      function (e) {
        e.fill = "#333";
        svgDoc.getElementById("east_flanders").style.fill = "green";
      },
      false
    );
  },
  false
);
