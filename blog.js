// necessary variables
const header1 = document.getElementsByTagName("h1");
const popupArticles = document.getElementsByClassName("popup_article");
let openedArticle = 0;

// variables for storing get request from URL
// for opening articles when clicked directly from main page
let url_string = window.location.href;
let url = new URL(url_string);
let articleNumber = url.searchParams.get("number");

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

// when button for next article is clicked
const readNext = () => {
  header1[0].style.display = "none";
  popupArticles[openedArticle].style.display = "none";
  openedArticle++;
  if (openedArticle >= popupArticles.length) openedArticle = 0;
  popupArticles[openedArticle].style.display = "block";
  popupArticles[openedArticle].scrollIntoView();
};

// if article is opened from main page this will trigger
if (articleNumber) {
  openArticle(articleNumber);
}
