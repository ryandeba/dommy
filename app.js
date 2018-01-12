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
      "rollIn", "rollOut", "zoomIn", "zoomInDown",
      "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut", "zoomOutDown",
      "zoomOutLeft", "zoomOutRight", "zoomOutUp", "slideInDown", "slideInLeft",
      "slideInRight", "slideInUp", "slideOutDown", "slideOutLeft", "slideOutRight",
      "slideOutUp"
    ],
    danceAnimations: [
      "bounce", "pulse", "rubberBand", "shake",
      "swing", "tada", "wobble", "jello", "lightSpeedIn"
    ],
    repeatAnimation: false,
    danceParty: false,
    dancePartyInterval: undefined,
    dancePartyColors: [
      "red",
      "khaki",
      "magenta",
      "darkviolet",
      "slateblue",
      "lime",
      "teal",
      "aqua",
      "navy",
      "chocolate",
      "silver",
      "beige"
    ],
    appStyle: ""
  },
  computed: {
    dommyClasses: function() {
      var classes = ["animated", this.animation];
      (this.repeatAnimation || this.danceParty) && classes.push("animated--repeat");
      return classes.join(" ");
    },
    availableDanceAnimations: function() {
      var index = this.danceAnimations.indexOf(this.animation);
      return index && this.danceAnimations.splice(index, 1) || this.danceAnimations;
    }
  },
  watch: {
    danceParty: function() {
      if (this.danceParty) {
        this.shuffle();
        this.dancePartyInterval = setInterval(this.shuffle, 2000);
      } else {
        clearInterval(this.dancePartyInterval);
        this.appStyle = "background-color: initial";
      };
    }
  },
  methods: {
    shuffle: function() {
      this.animation = getRandomArrayElement(this.danceAnimations);
      this.appStyle = "transition: 2s all; background-color: " + getRandomArrayElement(this.dancePartyColors);
    }
  }
});

function getRandomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
};

/*
ideas
- options for clothing/accessories (hats, food, etc)
*/
