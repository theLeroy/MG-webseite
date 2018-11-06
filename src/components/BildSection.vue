<template>
  <section class="Bildsection">
    <div class="title Cyan" v-if="Color = 'Cyan'">
      {{title}}
    </div>
    <div class="title Orange" v-else-if="Color != 'Cyan'">
      {{title}}
    </div>
    <Bild class="Bild" :Bildlink="Bildlink"/>

    <div class="text">
      {{text}}
    </div>
  </section>
</template>

<script>


import Bild from '@/components/Bild.vue'

export default {
  name: 'BildSection',
  components : {
    Bild
  },
  props: {
    Bildlink: String,
    Color: String,
    text: String,
    title: String
  }
}
</script>

<style scoped lang="scss">
.Bildsection {
  width: 100%;
  height: 65vh;
}
$Bml: 8%;
$Bmt: 10%;
$Bwd: 40vh;
.Bild {
  margin-left: $Bml;
  margin-top: $Bmt;
  width: $Bwd;
  height: calc(#{$Bwd} * 1.5);
  background-color: rgb(105, 105, 105);
  position: absolute;
  box-shadow: 0px 0px 52px rgba(0,0,0,0.16);
}
.title {
  font-size: 60px;
  margin-left: calc(#{$Bml} + 40px);
  margin-top: calc(#{$Bmt} + 40px);
  font-weight: 500;
  width: calc(#{$Bwd} + 100px);
  text-align: left;
  position: absolute;
  z-index: 10;
  color: #21FCFE;
}
.title > .Cyan {
  color: #21FCFE;
}
.title > .Orange {
  color: #FF9A56;
}
.text {
  font-size: 20px;
  line-height: 1.9;
  position: absolute;
  margin-left: calc(#{$Bwd} + #{$Bml} + 40px);
  margin-top: calc(#{$Bmt} + 180px);
  width: 40%;
}

</style>
