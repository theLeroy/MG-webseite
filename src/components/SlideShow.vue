<template>
  <div class="slideShow">
    <ul class="slideShow__container">
      <li class="slideShow__slide">
        <figure class="slideShow__image" style="background-image:url(https://c2.staticflickr.com/8/7668/17188829572_53e8c45aec_h.jpg);"></figure>
        <div class="slideShow__titleWrap">
          <h2 class="slideShow__slideTitle">Barichara</h2>
          <div class="slideShow__slideSubTitle">La Abuelita</div>
        </div>
      </li>
      <li class="slideShow__slide">
        <figure class="slideShow__image" style="background-image:url(https://c2.staticflickr.com/8/7595/16575563694_5259f740ed_k.jpg);"></figure>
        <div class="slideShow__titleWrap">
          <h2 class="slideShow__slideTitle">Tayrona</h2>
          <div class="slideShow__slideSubTitle">La playa</div>
        </div>
      </li>
      <li class="slideShow__slide">
        <figure class="slideShow__image" style="background-image:url(https://c2.staticflickr.com/8/7723/17172064766_edf36b7b51_k.jpg);"></figure>
        <div class="slideShow__titleWrap">
          <h2 class="slideShow__slideTitle">Santa Marta</h2>
          <div class="slideShow__slideSubTitle">El Burro</div>
        </div>
      </li>
      <li class="slideShow__slide">
        <figure class="slideShow__image" style="background-image:url(https://c1.staticflickr.com/9/8714/17164716126_5494165d77_k.jpg);"></figure>
        <div class="slideShow__titleWrap">
          <h2 class="slideShow__slideTitle">Salento</h2>
          <div class="slideShow__slideSubTitle">La vista</div>
        </div>
      </li>
    </ul>
    <div class="slideShow__next"><i class="fa fa-angle-right"></i></div>
    <div class="slideShow__prev"><i class="fa fa-angle-left"></i></div>
  </div>
</template>

<script>


export default {
  name: 'SocialWall',
  components: {
  },
  mounted: function () {
    // Debounce
function debounce(a,b,c){var d;return function(){var e=this,f=arguments;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),c&&!d&&a.apply(e,f)}}

var SlideShow = function() {

  var
    slider,
    slide,
    nextButton,
    prevButton,
    slideAmount,
    sliderWidth,
    title,
    subTitle,
    clickCounter,
    slideCounter;

  var _init = function () {
    slider        = document.getElementsByClassName('slideShow__container')[0];
    slide         = document.getElementsByClassName('slideShow__slide');
    slideAmount   = slide.length;
    nextButton    = document.getElementsByClassName('slideShow__next')[0];
    prevButton    = document.getElementsByClassName('slideShow__prev')[0];
    title         = document.getElementsByClassName('slideShow__slideTitle');
    subTitle      = document.getElementsByClassName('slideShow__slideSubTitle');
    sliderWidth   = parseInt(getComputedStyle(slider).width);
    clickCounter  = 0;
    slideCounter  = 0;

    _eventHandlers();
    _navButtons();
    _animateSlideIn(slideCounter);
  }

  var _eventHandlers = function() {
    nextButton.addEventListener('click', _slideNext, false);
    prevButton.addEventListener('click', _slidePrev, false);
    window.addEventListener('resize', _resize, false);
  }

  var _navButtons = function () {
    if (clickCounter === 0 ) {
      prevButton.classList.add('is-inactive')
    } else {
      prevButton.classList.remove('is-inactive')
    }
  }

  var _slideNext = function() {
    clickCounter++;
    slideCounter = clickCounter-1;
    if(clickCounter >= slideAmount) {
      clickCounter = 0;
      slideCounter = slideAmount - 1;
    }
    var tl = new TimelineLite();
    tl
      .add(_animateSlideOut(slideCounter))
      .to(slider, .9, {x:-clickCounter*sliderWidth, ease: Power2.easeOut})
      .add(_animateSlideIn(clickCounter))
    _navButtons();
  }

  var _slidePrev = function() {
    if(clickCounter > 0 ) {
      clickCounter--;

      // _getPreviousSlide(clickCounter +1)
      var tl = new TimelineLite();
      tl
      .add(_animateSlideOut(clickCounter+1))
      .to(slider, .9, {x:'+='+sliderWidth, ease: Power2.easeOut}, '-=0.2')
      .add(_animateSlideIn(clickCounter));

    }
    _navButtons();
  }

  var _animateSlideIn = function(index) {
    var currentSlide  = slide[index];
    var title         =  currentSlide.children[1].children[0];
    var subTitle      =  currentSlide.children[1].children[1];
    var image         =  currentSlide.children[0];

    var splitTitle = new SplitText(title);
    var revertTitle = function() {
      splitTitle.revert();
    }

    TweenLite.set(title, {perspective:400});

    var tl            = new TimelineLite({onComplete:revertTitle });
    tl
      .set(title, {opacity: 1})
      .staggerFrom(splitTitle.chars, 0.8, {
        opacity:0,
        scale:0,
        y:80,
        rotationX:180,
        transformOrigin:"0% 50% -50",
        ease:Back.easeOut
      }, 0.03)
      .fromTo(subTitle, 0.6, {y:50, opacity: 0},{y:0, opacity:1}, '-=0.3')
      .to(image, 0.4, {scale: 1, ease:Power2.easeOut},'-=0.6' )
    return tl;
  }

  var _animateSlideOut = function(index) {
    var currentSlide = slide[index];
    var title         =  currentSlide.children[1].children[0];
    var subTitle      =  currentSlide.children[1].children[1];
    var image         =  currentSlide.children[0];

    var tl = new TimelineLite();
    tl
      .to(title, 0.3, {opacity: 0})
      .to(subTitle, 0.3, {y:50, opacity: 0}, '-=0.3')
      .to(image, 0.4, {scale: 0.8, ease:Power2.easeIn}, '-=0.3' )
    return tl;
  }

  var _resize = debounce(function() {
    sliderWidth   = parseInt(getComputedStyle(slider).width);
    sliderOffset = sliderWidth * clickCounter;
    slider.style.transform = 'matrix(1, 0, 0, 1, -'+ sliderOffset + ', 0)'
  }, 50)

   return {
    init: _init
  }

}();

SlideShow.init();
  },
  data () {
    return {
    }
  }
}

</script>

<style scoped lang="scss">
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

body {
  background-color: #000;
  font-family: 'industry';
}

.slideShow {
  height: 100%;
  width: 75%;
  min-width: 750px;
  margin: 0 auto;
  overflow: visible;

  &__container {
    height: 100%;
    width: 100%;
    list-style: none;
    display: block;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    font-size: 0;
    line-height: 0;
    position: relative;
  }

  &__slide {
    height: 100%;
    width: 100%;
    display: inline-block;
    position: relative;
  }

  &__image {
    display: block;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
    transform: scale(0.8);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(225deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.5) 100%);
    }
  }

  &__titleWrap {
    font-size: 1rem;
    position: absolute;
    left: 4rem;
    bottom: 4rem;
    padding-bottom: 2rem;
    padding-left: 2rem;
    color: #fff;
  }

  &__slideTitle {
    font-weight: 300;
    z-index: 500;
    color: #fff;
    font-size: 5em;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1;
    margin: 0 0 .5rem;
    opacity: 0;
  }

  &__slideSubTitle {
    font-size: 1.5em;
    text-transform: uppercase;
    font-family: sans-serif;
    padding-left: .5rem;
    font-weight: 300;
    letter-spacing: 1px;
    opacity: 0;
  }

  &__next,
  &__prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 5em;
    line-height: 1em;
    color: #fff;

    i {
      display: block;
      float: left;
    }
  }

  &__next {
    right: 1rem;

    cursor: pointer;
  }

  &__prev {
    left: 1rem;
    cursor: pointer;
    transition: opacity 0.3s ease;
    transform-origin: center;

    &.is-inactive {
      opacity: 0.3;
      cursor: default;
    }
  }
}
</style>
