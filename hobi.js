const box2 = document.querySelector('.box2');
const checkbox1 = document.querySelector('.checkbox1');
const box3 = document.querySelector('.box3');

checkbox1.addEventListener('click', function() {
    box2.classList.toggle('slide');
});

checkbox1.addEventListener('click', function() {
    box3.classList.toggle('opac');
})
