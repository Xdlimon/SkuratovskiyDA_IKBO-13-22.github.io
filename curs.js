function backToTop() {
       window.scrollTo({top: 0, behavior: 'smooth'});
   }

   window.addEventListener('scroll', function() {
       var button = document.getElementById('backToTopButton');
       if (window.scrollY > 400) {
           button.style.display = 'block';
       } else {
           button.style.display = 'none';
       }
   });

$(document).ready(function(){
  $('#icon').click(function(){
    $('ul').toggleClass('show');
  });
});


const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});
