const header1 = document.getElementsByTagName("h1");
const popupArticle = document.getElementById("popup_article");

const openArticle = (number) => {
  header1[0].style.display = "none";
  popupArticle.style.display = "block";
  popupArticle.scrollIntoView();
};

const closeArticle = () => {
  header1[0].style.display = "block";
  popupArticle.style.display = "none";
};
