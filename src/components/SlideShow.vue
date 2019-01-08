<template>
  <div class="Slider">
    <carousel
    :perPageCustom="[[768, 3], [1024, 4]]"
     autoplay="true"
     autoplayHoverPause="true"
     autoplayTimeout="3500"
     paginationActiveColor="#00FCFE"
     paginationColor="rgba(5, 5, 5, 0.4)"
    >
      <slide v-for="i in 10" :key="i">
        <div class="Slide">
          Slide {{i}} Content
          <img class="Slideimg" v-if="url[(i-1)]" :src="url[(i-1)]" />
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  },
  props: {
    url: Array
  }
}
</script>

<style scoped lang="scss">
.Slider {
  width: 100%;
  padding: 20px;
}
$cyan: #00FCFE;
$o: #FF9A56;
  .Slide {
    height: 20vw;
    width: 20vw;
    background: red;
    @media only screen and (max-width: 768px) {
      width: 30vw;
      height: 30vw;
    }
  }
</style>
