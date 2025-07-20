// Скрипт для работы модального окна
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('authModal');
    const btn = document.getElementById('authBtn');
    const btnNav = document.getElementById('authBtnNav');
    const span = document.querySelector('.close-modal');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.querySelector('.auth-form');
    const registerForm = document.querySelector('.register-form');
    
    // Обработчики для кнопок авторизации
    btn.onclick = function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }
    
    btnNav.onclick = function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }
    
    // Закрытие модального окна
    span.onclick = function() {
        modal.style.display = 'none';
    }
    
    // Переключение между формами
    showRegister.onclick = function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
    
    showLogin.onclick = function(e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }
    
    // Закрытие при клике вне окна
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    // Обработка форм
    document.querySelector('.auth-form').onsubmit = function(e) {
        e.preventDefault();
        // Здесь код для авторизации
        alert('Добро пожаловать в Валхаллу, воин!');
        modal.style.display = 'none';
    }
    
    document.querySelector('.register-form').onsubmit = function(e) {
        e.preventDefault();
        // Здесь код для регистрации
        alert('Вы успешно вступили в наш клан! Проверьте дымовые сигналы (email) для подтверждения.');
        modal.style.display = 'none';
    }
});
