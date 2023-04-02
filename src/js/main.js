// глобальная переменная для хранения ссылки на текущий активный элемент
let activeDropdown = null;

// функция, которая добавляет/удаляет класс "header__dropdown-active" у ul-элемента, находящегося внутри кликнутой ссылки
function toggleHeaderDropdownActiveClass(idx) {
    const dropdown = document.querySelectorAll('.header__dropdown');
    if (dropdown[idx].classList.contains('header__dropdown-active')) {
        dropdown[idx].classList.remove('header__dropdown-active');
        activeDropdown = null; // сбрасываем ссылку на текущий активный элемент
    } else {
        // если уже есть другой активный элемент, сначала убираем у него класс
        if (activeDropdown) {
            activeDropdown.classList.remove('header__dropdown-active');
        }
        dropdown[idx].classList.add('header__dropdown-active');
        activeDropdown = dropdown[idx]; // обновляем ссылку на текущий активный элемент
    }
}

// находим все ссылки, которым нужен обработчик клика
const dropdownLinks = document.querySelectorAll('.header__link-drop');

// добавляем обработчик клика на каждую из них
dropdownLinks.forEach((link, idx) => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // отменяем действие по умолчанию (переход по ссылке)
        toggleHeaderDropdownActiveClass(idx);
    });
});

// добавляем обработчик клика на всю страницу, чтобы скрывать активный элемент при клике вне его
document.addEventListener('click', (event) => {
    if (!event.target.closest('.header__link-drop') && activeDropdown) {
        activeDropdown.classList.remove('header__dropdown-active');
        activeDropdown = null;
    }
});