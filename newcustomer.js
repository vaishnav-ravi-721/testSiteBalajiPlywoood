let navBar = document.querySelector("#nav-bar")
function sidemenu(){
    navBar.style.width = "250px";
}

function sidemenu2(){
    navBar.style.width = "0px"
}


//Welcome Section Animation
document.addEventListener('DOMContentLoaded', () => {
  anime.timeline({

      })
      .add({
          targets: '.cover',
          height: ['60%', '200%'],
          top: ['-90%', '100%'],
          easing: 'easeInOutCubic',
          duration: '1600'
      })
      .add({
          targets: '.text h2',
          top: ['-150%', '50%'],
          easing: 'easeOutQuad',
          offset: '-=600',
          duration: '700'
      })
      .add({
          targets: '.text h2',
          top: ['50%', '150%'],
          easing: 'easeOutQuad',
          offset: '+=1000',
          duration: '700'
      })
      .add({
          targets: '.cover',
          height: ['60%', '200%'],
          top: ['-90%', '100%'],
          easing: 'easeInOutCubic',
          duration: '1600',
          offset: '-=400',
          complete: (anim) => {
              document.querySelector('.text').style.display = 'none';
              document.querySelector('.main_content').style.display = 'block';
          }
      })
      .add({
          targets: '.main_content #welcomeTo,#shopName',
          translateY: [50, 0],
          opacity: [0,1],
          easing: 'easeOutExpo',
          delay: (el,i)=>i*150
      })

})






//SLIDE SHOW MANNUAL PLUS AUTOMATIC
// View Swiper.js demos
// https://swiperjs.com/demos

var swiper = new Swiper(".cubeSwiper", {
  // swiper effect
  effect: "cube",
  grabCursor: true,
  pauseOnMouseEnter: true,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },

  // Pagination as slide count

  pagination: {
    el: ".cube-pagination-fraction",
    type: "fraction"
  },

  // prev next buttons

  navigation: {
    nextEl: ".cube-button-next",
    prevEl: ".cube-buttson-prev"
  }
});

