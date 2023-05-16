const navBar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');


menuBtn.onclick = () =>{
  menuBtn.classList.toggle('fa-times')
  navBar.classList.toggle('active')
}

const swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiperfood = new Swiper(".food-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,  
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,      
    },
    1000: {
      slidesPerView: 3,      
    },
  },
});

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = document.querySelectorAll('.food-preview');


document.querySelectorAll('.food .slide').forEach(food => {
  food.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = food.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if (name === target) {
        preview.classList.add('active')
      }
    });
  }
});

previewContainer.querySelector('#close-priview').onclick = () => {
  previewContainer.style.display = 'none';
  previewBox.forEach(close =>{
     close.classList.remove('active')
    });
}


const swipermenu = new Swiper(".menu-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoHeight: true, 
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },  
});

const swiperblog = new Swiper(".blogs-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoHeight: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,      
    },
    1000: {
      slidesPerView: 3,      
    },
  },
});

lightGallery(document.querySelector('.gallery .gallery-container'));