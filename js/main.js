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

