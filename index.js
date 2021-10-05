const footballer = (name) => {
  const popup = document.getElementById("popup_p");
  document.getElementById(
    "footballer_info"
  ).innerHTML = `<span> information about: ${name} </span>`;
  popup.classList.toggle("show");
};

const openBlogArticle = (number) => {
  mywindow = window.open(`blog.html?number=${number}`, "_self");
};
