<template>
  <section class="Bildsection">
    <div class="title Cyan" v-if="Color == 'Cyan'">
      {{title}}
    </div>
    <Bild class="Bild" :Bildlink="Bildlink" v-if="Color == 'Cyan'"/>

    <div class="text fff" v-if="Color == 'Cyan'">
      {{text}}
    </div>



    <div class="Tright Orange title" v-if="Color != 'Cyan'">
      {{title}}
    </div>
    <div class="text right" v-if="Color != 'Cyan'">
      {{text}}
    </div>
    <Bild class="Bild Bright" :Bildlink="Bildlink" v-if="Color != 'Cyan'"/>

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
.Cyan {
  color: #21FCFE;
}
.Orange {
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
.fff {
  color: #fff;
}
.right {
  text-align: right;
  right: 0;
  margin-right: calc(40vh + 8% + 40px);
}
.Tright {
  text-align: right;
  right: 0;
  margin-right: calc(8% + 40px);
}
.Bright {
  margin-right: 8%;
  right: 0;
}

</style>
