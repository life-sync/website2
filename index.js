const signup = document.querySelector('.signup');
const modal = document.querySelector('.form-modal');
const close = document.querySelector('.close');
signup.addEventListener('click',()=>{
  modal.style.display='flex';
})
close.addEventListener('click',()=>{
  modal.style.display='none';
})
