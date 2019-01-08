<template>
  <div>
    <section class="section" id="section1">
      <logo/>
      <div class="VideoC">
        <video class="video" controls>
          <source src="@/assets/indiekator.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <a class="SWLink" href="/#/SocialWall">
          Lade jetzt hier dein Indiekator Moment auf unsere SocialWall! <div id="Swimg"></div>
        </a>
    </section>
    <section class="section" id="section2">
      <BildSection :Bildlink='"3"' :Color="'Cyan'" :title="Bildsection1Title" :text="Bildsection1Text"/>
      <a ref="btnHover" class="btnLink" href="/#/Tickets">
        <div class="btnText">
          Tickets Kaufen
        </div>
        <Btn/>
      </a>
    </section>
    <section class="section" id="section3">
      <BildSection :Bildlink="'2'" :Color="'Orange'" :title="Bildsection2Title" :text="Bildsection2Text"/>
      <a ref="btnHover2" class="btnLinkL btnLink" href="/#/Infos">
        <div class="btnText">
          Mehr Infos
        </div>
        <Btn/>
      </a>
    </section>
    <section class="section" id="section4">
      <h1>
        {{Title}}
      </h1>
      <h2>
        {{Subtitle}}
      </h2>
      <div class="Cardcontainer">
        <Card :Day="'20'" :Month="'September'" :Acts="'Mine, Alt-j, Bilderbuch'" :Link="'/#/timeline?day=1'"/>
        <Card :Day="'21'" :Month="'September'" :Acts="'Leyya, Bonaparte, Kalabrese'" :Link="'/#/timeline?day=2'"/>
        <Card :Day="'22'" :Month="'September'" :Acts="'OK KID, Rakede, Kraftklub'" :Link="'/#/timeline?day=3'"/>
        <div class="sBtn">
          <a ref="btnHover3" class="socialmedia btnLink" href="www.Instagram.com" target="_blank">
            <div class="btnText">
              Instagram
            </div>
            <Btn/>
          </a>
          <a ref="btnHover4" class="socialmedia btnLink" href="www.Facebook.com" target="_blank">
            <div class="btnText">
              Facebook
            </div>
            <Btn/>
          </a>
          <a ref="btnHover5" class="socialmedia btnLink" href="www.Twitter.com" target="_blank">
            <div class="btnText">
              Twitter
            </div>
            <Btn/>
          </a>
        </div>
      </div>
      <Dots/>
    </section>
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
    this.$refs.btnHover3.addEventListener('mouseover', () => {
      this.$refs.btnHover3.classList.add('btnHover')
    })
    this.$refs.btnHover3.addEventListener('mouseout', () => {
      this.$refs.btnHover3.classList.remove('btnHover')
    })
    this.$refs.btnHover4.addEventListener('mouseover', () => {
      this.$refs.btnHover4.classList.add('btnHover')
    })
    this.$refs.btnHover4.addEventListener('mouseout', () => {
      this.$refs.btnHover4.classList.remove('btnHover')
    })
    this.$refs.btnHover5.addEventListener('mouseover', () => {
      this.$refs.btnHover5.classList.add('btnHover')
    })
    this.$refs.btnHover5.addEventListener('mouseout', () => {
      this.$refs.btnHover5.classList.remove('btnHover')
    })
  },
  data () {
    return {
      Bildsection1Title: 'Tickets jetzt im Vorverkauf!',
      Bildsection1Text: 'Die Tickets für einen Tag oder auch für mehrere Tags sind jetzt im Vorverkauf. Greife schnell zu bevor die Tickets verkauft sind. Uns ist bei den Preisen wichtig, dass sie fair sind. Unser Ziel ist es nicht Profit zu generieren, sondern die Einnahmen dienen Lediglich dazu die Kosten zu decken. ',
      Bildsection2Title: 'Infos zum Festival',
      Bildsection2Text: 'Anfahrtswege, Wetter und Infos zum Zeltplatz findest du hier. Unser Festival findet bei jedem Wetter Stadt und der Zeltplatz ist schon am Vortag für alle campenden offen. Auch dieses Jahr freuen wir uns auf eine grandiose Zeit!',
      Title: 'Actlist and Timetable',
      Subtitle: '20.September to 22.September 2019'
    }
  }
}

</script>

<style scoped lang="scss">
.video {
  border-image: -moz-linear-gradient(135deg, #3cfcfe 0%,#ff9a56 100%);
  border-image: -webkit-linear-gradient(135deg, #3cfcfe 0%,#ff9a56 100%);
  border-image: linear-gradient(135deg, #3cfcfe 0%,#ff9a56 100%);
  border-image-slice: 1;
  border-width: 5px;
  border-style: solid;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  margin-bottom: 100px;
  width: 50vw;
  margin-left: 25vw;
}
.sBtn {
  margin-left: calc(50vw - 360px);
  position: absolute;
  width: 800px;
}
.socialmedia {
  display: inline-block;
  position: relative !important;
  left: unset;
  right: unset;
}
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
  left: 8%;
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
.SWLink {
  position: absolute;
  text-decoration: none;
  transform: rotate(90deg);
  right: 0;
  text-transform: uppercase;
  top: 0;
  margin-top: 350px;
  color: $o;
  margin-right: -220px;
  #Swimg {
    width: 40px;
    height: 40px;
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/7/76/Pfeil_oben.svg");
    background: url("https://upload.wikimedia.org/wikipedia/commons/7/76/Pfeil_oben.svg");
    background-size: cover;
    display: inline-block;
    margin-bottom: -10px;
    margin-left: 10px;
    filter: invert(1);
    opacity: 0.8;
  }
}
@media only screen and (max-width: 1050px) {
  .video {
    width: 75vw;
    margin-left: 12.5vw;
  }
}
@media only screen and (max-width: 850px) {
  .video {
    width: 85vw;
    margin-left: 7.5vw;
}
  .sBtn {
    width: 100vw;
    padding: 0px;
    margin: 0px;
    margin-bottom: 100px;
}
  #section2 {
    padding-top: 30px;
    box-sizing: border-box;
    height: 150vh;
  }
  .btnLink {
    left: unset;
    right: unset;
    margin-top: 400px;
    margin-left: calc(50% - 100px);
  }
  #section3 {
    padding-top: 30px;
    box-sizing: border-box;
    height: 150vh;
  }
}
@media only screen and (max-width: 650px) {
  .btnLink {
    margin-top: 200px;
  }
  .socialmedia {
    margin-top: 5vh;
  }
  #section2 {
    height: 120vh
  }
  #section3 {
    height: 120vh
  }
}

</style>
