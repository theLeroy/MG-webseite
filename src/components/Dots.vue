<template>
  <section>
    <div class="c">
      <div class="dot" :id="'dotid'+index" v-for="(value, index) in TempArray">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Dots',
  data () {
    return {
      TempArray: [ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a' ]
    }
  }
}
</script>

<style scoped lang="scss">
section {
}
.c {
  z-index: -1;
  width: 110vw;
  margin-left: -2vw;
  position: absolute;
  height: 100%;
}
.dot {
  bottom: 0;
  position: relative;
  width: 40px;
  height: 40px;
  display: inline-block;
  margin: 30px;
  border-color: #FF9A56;
  border-radius: 100%;
  border-style: solid;
  border-width: 3px;
}

@for $i from 0 through 41 {
  .dot:nth-child(40n + #{$i}) {

    $aN: dotAnim + $i;
    animation-name: #{$aN};
    animation-duration: (random(80)+ 30) + s;
    animation-iteration-count: infinite;
    animation-delay: -(random(80)+ 30) + s;

    $txs: (random(35)+ 5);
    $tys: (random(35)+ 5);
    $scale: (random(90)+ 50);

    @keyframes #{$aN} {
      0% {
        opacity: 0;
        transform: translate(0px, 0px) scale(0.2);
      }
      20% {
        opacity: 1;
        transform: translate(#{$txs}px, #{$tys}px) scale(#{$scale / 100});
      }
      35% {
        opacity: 0.5;
        transform: translate(-#{$txs}px, -#{$tys}px) scale(1);
      }
      50% {
        opacity: 0.2;
        transform: translate(#{$tys}px, -#{$txs}px) scale(#{$scale / 100});
      }
      100% {
        opacity: 0;
        transform: translate(0px, 0px) scale(0.2);
      }
    }
  }
}
</style>
