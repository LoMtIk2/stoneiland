// Обработчик события отправки формы
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращение отправки формы

    var nickname = document.querySelector('#nickname').value;
    var privileges = document.querySelector('#privileges').value;

    // Отправка запроса на сервер для процессинга покупки привилегии
    // и выдачи роли на Minecraft сервере через плагин LuckPerms
    
    // Если успешно, выполнить следующий код
    alert('Привилегия успешно приобретена!');
    
    // Или выводить ошибку
    // alert('Ошибка при приобретении привилегии!');
});

window.addEventListener("load", function() {
    var element = document.querySelector(".buy");
    element.style.opacity = 1;
});
