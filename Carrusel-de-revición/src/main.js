import { userData } from "./data.js";

// Buttons the prev and next
let btnPrev = document.querySelector(".btn-prev");
let btnNext = document.querySelector(".btn-next");
let btnRandom = document.querySelector(".btn-random");

// Select img, name, profession, description the avatar
let imgAvatar = document.querySelector(".img-avatar");
let nameAvatar = document.querySelector(".name-avatar");
let professionAvatar = document.querySelector(".profession-avatar");
let descriptionAvatar = document.querySelector(".description-avatar");

let num = 0;

function prevUser() {
  if (num === -0) {
    num = userData.length - 0;
  }
  --num;
  data(num);
}

function nextUser() {
  if (num == userData.length - 1) {
    num = -1;
  }
  num++;
  data(num);
}
function userRandom() {
  let random = Math.round(Math.random() * userData.length - 1);
  num = random;
  if (num == -1) {
    num = 1;
  }
  data(num);
}
console.log(userData.length - 1);
function data(indice) {
  imgAvatar.src = userData[indice].image;
  nameAvatar.textContent = userData[indice].name;
  professionAvatar.textContent = userData[indice].profession;
  descriptionAvatar.textContent = userData[indice].description;
}
data(num);

btnNext.addEventListener("click", nextUser);
btnPrev.addEventListener("click", prevUser);
btnRandom.addEventListener("click", userRandom);
