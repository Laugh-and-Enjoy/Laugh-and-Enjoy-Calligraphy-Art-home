'use strict';

{
  const open1 = document.getElementById('open1');
  const overlay1 = document.querySelector('.overlay1');
  const close1 = document.getElementById('close1');

  open1.addEventListener('click', () =>{
    overlay1.classList.add('show');
    open1.classList.add('hide');
  });

  close1.addEventListener('click', () =>{
    overlay1.classList.remove('show');
    open1.classList.remove('hide');
  });
}

{
  const menuItems = document.querySelectorAll('.menukind li a');
  const contents = document.querySelectorAll('.menukindditail');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach(menukindditail => {
        menukindditail.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}

// chatgpt

var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  var i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active2");
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active2");
}

// 自動的にスライドを切り替える
var timer = setInterval(function() { plusSlides(1); }, 5000);

// 矢印ボタンが押されたら自動的にスライドを切り替えるタイマーをリセットする
var buttons = document.querySelectorAll(".prev, .next");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    clearInterval(timer);
    timer = setInterval(function() { plusSlides(1); }, 5000);
  });
}

for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    clearInterval(timer);
    timer = setInterval(function() { plusSlides(1); }, 5000);
    var slideNumber = parseInt(this.getAttribute("data-slide"));
    if (slideNumber != slideIndex) {
      currentSlide(slideNumber);
    }
  });
}