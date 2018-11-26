<template>
  <div>
    <div class="section" id="section1">
      <logo/>
    </div>
    <div class="section" id="section2">
      <BildSection :Bildlink="'https://i.pinimg.com/originals/8e/68/fa/8e68fa1859407d59544bf86d5449685b.jpg'" :Color="'Cyan'" :title="Bildsection1Title" :text="Bildsection1Text"/>
      <a ref="btnHover" class="btnLink" href="/#/Tickets">
        <div class="btnText">
          Tickets Kaufen
        </div>
        <Btn/>
      </a>
    </div>
    <div class="section" id="section3">
      <BildSection :Bildlink="'https://i.pinimg.com/originals/8e/68/fa/8e68fa1859407d59544bf86d5449685b.jpg'" :Color="'Orange'" :title="Bildsection2Title" :text="Bildsection2Text"/>
      <a ref="btnHover2" class="btnLinkL btnLink" href="/#/Infos">
        <div class="btnText">
          Mehr Infos
        </div>
        <Btn/>
      </a>
    </div>
    <div class="section" id="section4">
      <h1>
        {{Title}}
      </h1>
      <h2>
        {{Subtitle}}
      </h2>
      <div class="Cardcontainer">
        <Card :Day="'20'" :Month="'September'" :Acts="'Her, Alt-j, Bilderbuch'" :Link="'/#/timeline?day=1'"/>
        <Card :Day="'21'" :Month="'September'" :Acts="'Her, Alt-j, Bilderbuch'" :Link="'/#/timeline?day=2'"/>
        <Card :Day="'22'" :Month="'September'" :Acts="'Her, Alt-j, Bilderbuch'" :Link="'/#/timeline?day=3'"/>
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
import Btn from '@/components/Btn.vue'

export default {
  name: 'Frontpage',
  components: {
    BildSection,
    Logo,
    Card,
    Dots,
    Btn
  },
  mounted: function () {
    this.$refs.btnHover.addEventListener('mouseover', () => {
      this.$refs.btnHover.classList.add('btnHover')
    })
    this.$refs.btnHover.addEventListener('mouseout', () => {
      this.$refs.btnHover.classList.remove('btnHover')
    })
    this.$refs.btnHover2.addEventListener('mouseover', () => {
      this.$refs.btnHover2.classList.add('btnHover')
    })
    this.$refs.btnHover2.addEventListener('mouseout', () => {
      this.$refs.btnHover2.classList.remove('btnHover')
    })
  },
  data () {
    return {
      Bildsection1Title: 'Tickets jetzt im Vorverkauf!',
      Bildsection1Text: 'Die Tickets für einen Tag oder auch für mehrere Tags sind jetzt im Vorverkauf. Greife schnell zu bevor die Tickets verkauft sind. Uns ist bei den Preisen wichtig, dass sie fair sind. Unser Ziel ist es nicht Profit zu generieren, sondern die Einnahmen dienen Lediglich dazu die Kosten zu decken. ',
      Bildsection2Title: 'Infos zum Festival',
      Bildsection2Text: 'Anfahrtswege, Wetter und Infos zum Zeltplatz findest du hier. Unser Festival findet bei jedem Wetter Stadt und der Zeltplatz ist schon am Vortag für alle campenden offen.',
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
.btnR {

}
.btnHover {
  transition: 0.5s;
}
.btnText {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  position: absolute;
  vertical-align: middle;
  margin-top: 32px;
  text-align: center;
  width: 93%;
}
.btnLink {
  position: absolute;
  right: 0px;
  margin-right: 8%;
  margin-top: 90px;
}
.btnLinkL {
  right: unset;
  left: 0px;
  .btnText {
    color: black;
  }
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
