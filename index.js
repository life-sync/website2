//scroll indicator
window.addEventListener('scroll', moveScrollIndicator);
const scrollIndicatorElt = document.getElementById('scrollIndicator');
const maxHeight = window.document.body.scrollHeight - window.innerHeight;
function moveScrollIndicator(e){
  const percentage = ((window.scrollY) / maxHeight) * 100;
  scrollIndicatorElt.style.width = percentage + '%';
}
//typewriter effect
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
//counter
$(".num").counterUp({
  delay:10,
  time:1000
}
  );
//loader
var preload = document.createElement("div");
preload.className = "preloader";
preload.innerHTML =
  '<p class="hello"></p><div id="preloader"><div id="loader"></div></div>';
document.body.appendChild(preload);
window.addEventListener("load", function() {
  preload.className += " fade";
  setTimeout(function() {
    preload.style.display = "none";
  }, 5000);
});