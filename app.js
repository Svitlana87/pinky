const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');
// подія
burger.addEventListener('click', function(){
    navMenu.classList.toggle('open_menu');
})
// toggle - вкл / викл

var dialog = document.querySelector('.modal');
   document.querySelector('#closeDialog').onclick = function() {
    dialog.classList.toggle('modal_hidden');
   }