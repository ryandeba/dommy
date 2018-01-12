const animations = [
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
];

Vue.component("dommy", {
  template: "#template-dommy",
  props: ["data"],
  computed: {
    dommyClasses: function() {
      var classes = ["animated", this.data.animation];
      this.data.repeatAnimation && classes.push("animated--repeat");
      return classes.join(" ");
    },
  }
});

new Vue({
  el: "#app",
  data: {
    animation: "",
    animations: animations,
    numberOfDommys: 1,
    dommys: [new Dommy()],
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
  watch: {
    danceParty: function() {
      if (this.danceParty) {
        this.repeatAnimation = true;
        this.shuffle();
        this.dancePartyInterval = setInterval(this.shuffle, 2000);
      } else {
        clearInterval(this.dancePartyInterval);
        this.appStyle = "background-color: initial";
      };
    },
    animation: function() {
      var animation = this.animation;
      this.dommys.forEach(function(dommy) {
        console.log(animation);
        dommy.animation = animation;
      });
    },
    repeatAnimation: function() {
      var repeatAnimation = this.repeatAnimation;
      this.dommys.forEach(function(dommy) {
        dommy.repeatAnimation = repeatAnimation;
      });
    },
    numberOfDommys: function() {
      while (this.dommys.length < this.numberOfDommys) {
        this.dommys.push(new Dommy({animation: this.animation, repeatAnimation: this.repeatAnimation}));
      };

      while (this.dommys.length > this.numberOfDommys && this.dommys.length > 1) {
        this.dommys.pop();
      };
    }
  },
  methods: {
    shuffle: function() {
      this.dommys.forEach(function(dommy) {
        dommy.animation = getRandomArrayElement(animations);
      });
      this.appStyle = "transition: 2s all; background-color: " + getRandomArrayElement(this.dancePartyColors);
    }
  }
});

function getRandomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
};

function Dommy(options) {
  return {
    animation: "",
    repeatAnimation: false,
    ...options
  };
};

/*
ideas
- options for clothing/accessories (hats, food, etc)
- sad-faced disabled dommy when there are no dommys
*/
