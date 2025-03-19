document.addEventListener("DOMContentLoaded", function () {
  const langLinks = document.querySelectorAll(".language-switcher a");
  const textElements = document.querySelectorAll("[data-lang]");
  const translationsUrl = "/translations.json"; // Шлях до JSON-файлу

  // Отримуємо збережену мову або встановлюємо "en" за замовчуванням
  const savedLang = localStorage.getItem("lang") || "en";
  loadTranslations(savedLang);

  // Додаємо обробник кліків для кожного прапорця
  langLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const selectedLang = this.getAttribute("data-lang");
      localStorage.setItem("lang", selectedLang);
      loadTranslations(selectedLang);
    });
  });

  // Функція для завантаження перекладів через AJAX
  function loadTranslations(lang) {
    fetch(translationsUrl)
      .then((response) => response.json()) // Перетворюємо відповідь у JSON
      .then((translations) => {
        textElements.forEach((element) => {
          const key = element.getAttribute("data-lang");
          if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
          }
        });
      })
      .catch((error) =>
        console.error("Помилка завантаження перекладів:", error)
      );
  }
});
