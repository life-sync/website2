//modal
const signup = document.querySelector('.signup');
const modal = document.querySelector('.form-modal');
const close = document.querySelector('.close');
signup.addEventListener('click',()=>{
  modal.style.display='flex';
})
close.addEventListener('click',()=>{
  modal.style.display='none';
})
//nav
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function openSlideMenu(){
  document.getElementById('menu').style.width = '250px';
  document.getElementById('content').style.marginLeft = '20px';
}
function closeSlideMenu(){
  document.getElementById('menu').style.width = '0';
  document.getElementById('content').style.marginLeft = '0';
}
//typing
var Writer = function(selector, text, infinite) {
  this.config = {
    selector: selector,
    text: text,
    infinite: infinite
  };
  this.interval = null;
  this.start = function() {
    var _this = this;
    var cnt = _this.config.text;
    var txt = "";
    var i = 0; 
    time = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
    _this.interval = setInterval(function() {
      if (txt.length == cnt.length) {
        if(_this.config.infinite){
          txt = "";
          i = 0; 
        }else{
          _this.stop();
        }
      } else {
        txt += cnt[i];
        i++;
      }
      document.querySelector(_this.config.selector).innerHTML = txt;
    }, time);
  };
  this.stop = function() {
    var _this = this;
    clearInterval(_this.interval);
    document.querySelector(_this.config.selector).innerHTML = _this.config.text;
  };
};
var text = "Learn~Observe~Create";
var writer = new Writer("#text", text, false);
writer.start();
//btn ripple
//loader
//back-to-top 
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



// aos

