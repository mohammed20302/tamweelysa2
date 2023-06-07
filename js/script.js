const translation = {
    en: {
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",
        selectlanguage: "Selectlanguage",
        english: " English",
        arabic: "Arabic ",


    },
    ar: {
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        contact: "إتصل بنا",
        selectlanguage: "إختر اللغة",
        english: " إنجليزي",
        arabic: "عربي ",


    },
};
const languageselector = document.querySelector("select");

languageselector .addEventListener("change", (event) =>{
    setLanguage(event.target.value);

});
const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-il8n]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-il8n");
        element.textContent = translationKey[language][translationKey];
    });
};
