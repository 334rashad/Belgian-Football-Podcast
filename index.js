const footballer = (name) => {
  const popup = document.getElementById("popup_p");
  document.getElementById(
    "footballer_info"
  ).innerHTML = `<span> information about: ${name} </span>`;
  popup.classList.toggle("show");
  event.stopPropagation();
};

// const el = document.querySelector("#ronaldo");
// if (el) {
//   el.addEventListener("mouseover", mouseOver);
// } else alert("not working");

// function mouseOver() {
//   document.getElementsByClassName("second_row")[0].style.backgroundColor =
//     "red";
// }
