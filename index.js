const signup = document.querySelector('.signup');
const modal = document.querySelector('.form-modal');
const close = document.querySelector('.close');
signup.addEventListener('click',()=>{
  modal.style.display='flex';
})
close.addEventListener('click',()=>{
  modal.style.display='none';
})
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function openSlideMenu(){
  document.getElementById('menu').style.width = '100%';
  document.getElementById('content').style.marginLeft = '100%';
}
function closeSlideMenu(){
  document.getElementById('menu').style.width = '0';
  document.getElementById('content').style.marginLeft = '0';
}
