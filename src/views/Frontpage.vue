<template>
  <div>
    <div class="section" id="section1">
      <logo/>
    </div>
    <div class="section" id="section2">
      <BildSection :Bildlink="'https://i.pinimg.com/originals/8e/68/fa/8e68fa1859407d59544bf86d5449685b.jpg'" :Color="'Cyan'" :title="Bildsection1Title" :text="Bildsection1Text"/>
    </div>
    <div class="section" id="section3">
      <BildSection :Bildlink="'https://i.pinimg.com/originals/8e/68/fa/8e68fa1859407d59544bf86d5449685b.jpg'" :Color="'Orange'" :title="Bildsection1Title" :text="Bildsection1Text"/>
    </div>
    <div class="section" id="section4">
      <h1>
        {{Title}}
      </h1>
      <h2>
        {{Subtitle}}
      </h2>
      <div class="Cardcontainer">
        <Card :Day="'30'" :Month="'October'" :Acts="'Her, Alt-j, Bilderbuch'" :Link="'/#/timeline?day=1'"/>
        <Card :Day="'31'" :Month="'October'" :Acts="'Her, Alt-j, Bilderbuch'" :Link="'/#/timeline?day=2'"/>
        <Card :Day="'01'" :Month="'November'" :Acts="'Her, Alt-j, Bilderbuch'" :Link="'/#/timeline?day=3'"/>
      </div>
        <Dots/>
      </div>
  </div>
</template>

<script>

import BildSection from '@/components/BildSection.vue'
import Logo from '@/components/Logo.vue'
import Card from '@/components/Card.vue'
import Dots from '@/components/Dots.vue'

export default {
  name: 'Frontpage',
  components: {
    BildSection,
    Logo,
    Card,
    Dots
  },
  data () {
    return {
      Bildsection1Title: 'Hay Eins Title:',
      Bildsection1Text: 'nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sa',
      Title: 'Actlist and Timetable',
      Subtitle: '29.October to 1.November 2019'
    }
  }
}

</script>

<style scoped lang="scss">
$o: #FF9A56;
.Cardcontainer {
  position: absolute;
}
h1 {
  text-align: center;
  color: #fff;
  font-size: 50px;
  font-weight: 900;
  margin-top: 20vh;
  margin-bottom: 20px;
}
h2 {
  text-align: center;
  color: #fff;
  font-size: 20px;
}
#section1 {
  height: 100vh;
  background-color: none;
}
#section2 {
  height: 100vh;
  background-color: none;
}
#section3 {
  height: 100vh;
  background-color: #ffffff;
}
#section4 {
  height: 100vh;
}
@media only screen and (max-width: 850px) {
  #section3 {
    padding-top: 30px;
    box-sizing: border-box;
    height: 110vh;
  }
}
@media only screen and (max-width: 600px) {
  #section3 {
    padding-top: 80px;
    box-sizing: border-box;
    height: 110vh;
  }
}


</style>
