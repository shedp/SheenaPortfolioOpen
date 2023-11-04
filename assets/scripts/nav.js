var menuToggle = document.getElementById('menu-toggle');
var modal = document.getElementById('menu-modal');
var closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', function () {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});