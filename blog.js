// necessary variables
const header1 = document.getElementsByTagName("h1");
const popupArticles = document.getElementsByClassName("popup_article");
let openedArticle = 0;

console.log(popupArticles);
// to hide h1 element and open clicked article
const openArticle = (number) => {
  openedArticle = number - 1;
  header1[0].style.display = "none";
  for (var i = 0; i < popupArticles.length; i++) {
    popupArticles[i].style.display = "none";
  }
  popupArticles[openedArticle].style.display = "block";
  popupArticles[openedArticle].scrollIntoView();
};

// closes currently open aricle and shows h1 element
const closeArticle = (number) => {
  header1[0].style.display = "block";
  popupArticles[openedArticle].style.display = "none";
  document.getElementsByTagName("h1")[0].scrollIntoView();
};
