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