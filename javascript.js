document.addEventListener("DOMContentLoaded", () => {
    console.log("Страница загружена!");

    const companies = document.querySelectorAll(".company");
    companies.forEach(company => {
        company.addEventListener("click", () => {
            alert(`Вы выбрали компанию: ${company.querySelector("h2").innerText}`);
        });
    });
});


document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.boxShadow = '0px 0px 10px rgba(255, 255, 0, 0.8)'; /* Жарық эффекті */
    });
    item.addEventListener('mouseout', () => {
        item.style.boxShadow = 'none'; /* Наведение аяқталған соң эффект өшеді */
    });
});
