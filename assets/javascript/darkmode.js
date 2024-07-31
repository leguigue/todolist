document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('#toggle');
    const body = document.body;
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        toggle.checked = true;
        
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        toggle.checked = false;
    }
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            localStorage.setItem('darkMode', 'enabled');

        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});