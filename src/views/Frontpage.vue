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
      <div class="Title">
        Actlist and Timetable
      </div>
      <div class="Subtitle">
        29.October to 1.November 2019
      </div>
        <Card :Day="'30'" :Month="'October'" :Acts="'Her, Alt-j, Bilderbuch'" :Link="'asd'"/>
        <Card :Day="'30'" :Month="'October'" :Acts="'Her, Alt-j, Bilderbuch'" :Link="'asd'"/>
        <Card :Day="'30'" :Month="'October'" :Acts="'Her, Alt-j, Bilderbuch'" :Link="'asd'"/>
    </div>
  </div>
</template>

<script>

import BildSection from '@/components/BildSection.vue'
import Logo from '@/components/Logo.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Frontpage',
  components: {
    BildSection,
    Logo,
    Card
  },
  data () {
    return {
      Bildsection1Title: 'Hay Eins Title:',
      Bildsection1Text: 'nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sa'
    }
  }
}

</script>

<style scoped lang="scss">
$o: #FF9A56;
.Title {

}
.Subtitle {

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
</style>
