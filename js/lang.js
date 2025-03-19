document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("language-selector");

  // Отримуємо мову з localStorage або встановлюємо "en" за замовчуванням
  const savedLang = localStorage.getItem("lang") || "en";
  languageSelector.value = savedLang;

  // Функція для переходу на відповідну мовну версію
  function changeLanguage(lang) {
    localStorage.setItem("lang", lang);
    let currentPage = window.location.pathname;

    if (currentPage.includes("products")) {
      window.location.href =
        lang === "en"
          ? "/peterfisch/products.html"
          : lang === "uk"
          ? "/peterfisch/products-uk.html"
          : "/peterfisch/products-pl.html";
    } else {
      window.location.href =
        lang === "en"
          ? "/peterfisch/index.html"
          : lang === "uk"
          ? "/peterfisch/index-uk.html"
          : "/peterfisch/index-pl.html";
    }
  }

  // При зміні мови оновлюємо сторінку
  languageSelector.addEventListener("change", function () {
    changeLanguage(this.value);
  });
});
