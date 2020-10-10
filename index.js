// Contact Us form modal
const signup = document.querySelector('.signup');
const modal = document.querySelector('.form-modal');
const close = document.querySelector('.close');
signup.addEventListener('click',()=>{
  modal.style.display='flex';
})
close.addEventListener('click',()=>{
  modal.style.display='none';
})
// Back To top btn
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
setTimeout(function(){
  $('body').addClass('loaded');
}, 5000);