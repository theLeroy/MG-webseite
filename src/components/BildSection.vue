<template>
  <section class="Bildsection">
    <div class="title Cyan" v-if="Color == 'Cyan'">
      {{title}}
    </div>
    <div class="Tright Orange title" v-if="Color != 'Cyan'">
      {{title}}
    </div>
    <Bild class="Bild" :Bildlink="Bildlink" v-if="Color == 'Cyan'"/>
    <Bild class="Bild Bright" :Bildlink="Bildlink" v-if="Color != 'Cyan'"/>

    <div class="text fff" v-if="Color == 'Cyan'">
      {{text}}
    </div>

    <div class="text right" v-if="Color != 'Cyan'">
      {{text}}
    </div>

  </section>
</template>

<script>

import Bild from '@/components/Bild.vue'

export default {
  name: 'BildSection',
  components: {
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
  width: 100vw;
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


@media only screen and (max-width: 970px) {
  $Bml: 3%;
  $Bmt: 10%;
  $Bwd: 40vh;
  .Bild {
    margin-left: $Bml;
    margin-top: $Bmt;
    width: $Bwd;
    height: calc(#{$Bwd} * 1.5);
  }
  .title {
    font-size: 60px;
    margin-left: calc(#{$Bml} + 40px);
    margin-top: calc(#{$Bmt} + 40px);
    width: calc(#{$Bwd} + 100px);
  }
  .text {
    font-size: 20px;
    margin-left: calc(#{$Bwd} + #{$Bml} + 40px);
    margin-top: calc(#{$Bmt} + 180px);
    width: 52%;
  }
  .Tright {
    margin-right: calc(#{$Bml} + 40px);
  }
  .Bright {
    margin-right: $Bml;
  }
  .right {
    margin-right: calc(40vh + #{$Bml} + 40px);
  }
}

@media only screen and (max-width: 850px) {
  $Bml: 20%;
  $Bmt: 10%;
  $Bwd: 50vw;
  .Bild {
    margin-left: calc(50% - (#{$Bwd} / 2));
    margin-top: $Bmt;
    width: $Bwd;
    height: calc(#{$Bwd} * 1.5);
    position: relative;
  }
  .title {
    font-size: 60px;
    margin-left: calc(#{$Bml} + -20px);
    margin-top: calc(#{$Bmt} + 40px);
    width: calc(#{$Bwd} + 100px);
  }
  .text {
    position: relative;
    font-size: 20px;
    padding: 5vw;
    margin-left: 0px;
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    margin-top: 20px;
  }
  .Bright {
    margin-top: 20px;
  }
}
@media only screen and (max-width: 550px) {
  .Bild {
  }
  .title {
    font-size: 40px;
  }
  .text {
    font-size: 18px;
    line-height: 1.5;
  }
}

</style>
