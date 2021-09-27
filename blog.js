const header1 = document.getElementsByTagName("h1");

const openArticle = (number) => {
  const popupArticle = document.getElementById("popup_article");
  header1[0].style.display = "none";
  popupArticle.style.display = "block";
};
