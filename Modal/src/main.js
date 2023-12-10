

let btmOPen = document.querySelector('.btn-open');

let modal = document.querySelector('.modal');
let hidden = document.querySelector('.close');


function openModal(){
  modal.classList.add('flex');
  modal.classList.remove('hidden')
}
function closeModal(){
  modal.classList.remove('flex');
  modal.classList.add('hidden')
}
btmOPen.addEventListener('click', openModal)
hidden.addEventListener('click', closeModal)