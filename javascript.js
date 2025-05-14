document.addEventListener("DOMContentLoaded", () => {
    console.log("Страница загружена!");

    const companies = document.querySelectorAll(".company");
    companies.forEach(company => {
        company.addEventListener("click", () => {
            alert(`Вы выбрали компанию: ${company.querySelector("h2").innerText}`);
        });
    });
});
