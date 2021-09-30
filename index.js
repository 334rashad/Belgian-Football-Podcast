const footballer = (name) => {
  const popup = document.getElementById("popup_p");
  document.getElementById(
    "footballer_info"
  ).innerHTML = `<span> information about: ${name} </span>`;
  popup.classList.toggle("show");
  // event.stopPropagation();
};
// "_self"
const openBlogArticle = (number) => {
  window.open("blog.html", "blog", "status=1,toolbar=1");
  openArticle(number);
};
