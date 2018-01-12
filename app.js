/*
document.getElementById("select-animation").onchange = animateDommy;
document.getElementById("btn-play").onclick = animateDommy;

var dancePartyInterval;
document.getElementById("dance-party").onchange = function() {
  if (this.checked) {
    dancePartyInterval = setInterval(function() {
      
    }, 1000);
  } else {
    clearInterval(dancePartyInterval);
  };
}
*/

function animateDommy() {
  var el = document.getElementById("dommy");
  el.classList = "dommy";
  setTimeout(function() {
    el.classList = "dommy animated animated--repeat " + document.getElementById("select-animation").value;
  }, 10);
};

new Vue({
  el: "#app",
  data: {
    animation: "",
    animations: [
      "bounce", "flash", "pulse", "rubberBand", "shake",
      "headShake", "swing", "tada", "wobble", "jello",
      "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp",
      "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp",
      "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig",
      "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "fadeOut",
      "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight",
      "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "flipInX", "flipInY",
      "flipOutX", "flipOutY", "lightSpeedIn", "lightSpeedOut", "rotateIn",
      "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "rotateOut",
      "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "hinge",
      "jackInTheBox", "rollIn", "rollOut", "zoomIn", "zoomInDown",
      "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut", "zoomOutDown",
      "zoomOutLeft", "zoomOutRight", "zoomOutUp", "slideInDown", "slideInLeft",
      "slideInRight", "slideInUp", "slideOutDown", "slideOutLeft", "slideOutRight",
      "slideOutUp"
    ],
    repeatAnimation: false
  },
  computed: {
    dommyClasses: function() {
      var classes = ["animated", this.animation];
      this.repeatAnimation && classes.push("animated--repeat");
      return classes.join(" ");
    }
  }
});
