<template>
  <div>
    <section class="section" id="section1">
      <logo/>
      <div class="Titel">Teile jetzt deine besten Indiekator Momente!</div>
      <div class="Upload">
        <span v-bind:class="{ show: show}" class="Okey">Erfolgreich!<br>Dein Bild wird nun unten angezeigt.</span>
        <form>
          <input id="Title" v-model="titl" type="text" name="Titel" placeholder="Titel des Fotos">
          <input id="User" v-model="usnm" type="text" name="Username" placeholder="Dein Nutzername">
          <div class="BrandC">
            <input id="BrandBox" type="checkbox" name="yourbrand">
            <label id="Brand" for="yourbrand">Das Bild/Video darf auf yourbrand.ch verwendet werden.</label>
          </div>
          <div class="btnC">
            <button class="btn">Foto Hochladen</button>
            <input ref="Upload" id="Upload" type="file" name="Imgae" value="Upload" v-on:change="onFileChange">
          </div>
        </form>
      </div>
    </section>
    <section class="section" id="section2">
      <SlideShow :url="url" :name="name" :titel="titel"/>
    </section>
    <section class="section" id="section3">
      <iframe src="https://www.youtube-nocookie.com/embed/odsRJcaGMww" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe src="https://www.youtube-nocookie.com/embed/bfVK9z7BlUM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
    <section class="section" id="section4">
      Bitte beachte, dass die Bilder, die du hier hochlädst für die Öffentlichkeit offen zugänglich sind. Dabei ist es wichtig, dass du die Einverständnis der Leute auf dem Bild hast.
    </section>
  </div>
</template>

<script>

import Logo from '@/components/Logo.vue'
import SlideShow from '@/components/SlideShow.vue'

export default {
  name: 'SocialWall',
  components: {
    Logo,
    SlideShow
  },
  data () {
    return {
      url: [
        'https://c1.staticflickr.com/8/7172/6661760949_c089df9f5b_b.jpg',
        'https://www.rollingstone.de/wp-content/uploads/2017/07/03/12/gettyimages-460475018-1.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrCKJEtXXypSohOQdnz99U1wQ0PvWjeBQUg9QLkX6sEvHEn4bjQ',
        'http://webhook.janiswanger.ch/media/indiekator.b8e1cfb9.mp4',
        'https://oliknights.files.wordpress.com/2017/02/honestlondonurbanexploringlamarrgoldingparkour.jpg?w=660',
        'https://i.ytimg.com/vi/pgApXCIlrGs/maxresdefault.jpg',
        'https://apps-cloud.n-tv.de/img/19891182-1497512070000/16-9/1136/Alt-J-3.jpg',
        'https://i1.wp.com/lh3.googleusercontent.com/-nc4Rk_zs28c/VtoIAUGkpbI/AAAAAAAAAYo/vBGQuA9Bl9c/s720-Ic42/leyya1.jpg?resize=350%2C200&ssl=1',
        'https://www.spreadshirt.de/blog/files/2015/05/blog_festival_Main.jpg',
        'https://www.hardnews.nl/wp-content/uploads/2015/06/Festival-camping-checklist.png',
        'http://www.simonchristen.com/images/albums/ue_001.jpg',
        'https://www.w3schools.com/html/mov_bbb.mp4',
        'https://www.thenational.ae/image/policy:1.698724:1516888082/wk26-music-wasla-mashrou-leila.jpg?f=16x9&w=1200&$p$f$w=03c683f',
        'https://www.iamsterdam.com/media/agenda/festivals/amsterdam-open-air-2015-7amsterdam-open-air-2015.jpg',
        'https://www.pangea-festival.de/files/content/Galeries/2018/Top%20Shots/%C2%A9NiclasRuehl_Pangea2018_lowres-907.jpg',
        'https://thefusionfestival.co.uk/wp-content/uploads/2018/09/38-David-Guetta-Fusion-Charlotte_Wellings.jpg',
        'https://style-magazin.ch/sites/default/files/styles/fixed-width-778/public/web-jeans_for_jesus_011.jpg.jpg?itok=V9JCaijI',
        'http://d8mlrvfocjtax.cloudfront.net/artists/3979_36612_original.jpg?1485707709'

      ],
      name: [
        'Sophie',
        'Jonas',
        'Elias',
        'Maria',
        'Sophia',
        'Alexander',
        'Emilia',
        'Emma',
        'Ben',
        'Hannah',
        'Anna',
        'Mia',
        'Maximilian',
        'Marie',
        'Paul',
        'Noah',
        'Leon',
        'Luisa',
        'Louis',
        'Felix'
      ],
      titel: [
        'Die Ruinen',
        'Alt J. Der beste Auftritt ever!',
        'I Love Indiekator',
        'Intro Video',
        'Indie',
        'Bilderbuch',
        'Atemberaubender Auftritt von Her',
        'Leyya mein bestes Bild',
        'Luftbalone',
        'Das Zeltlager',
        'Die Fabrick von innen',
        'Fantastisches Konzert',
        'Die Stimmung war super',
        'Outdor Bühne',
        'Rock and roll',
        'Samstags Abend',
        'Bonaparte',
        'Jeans for Jesus'
      ],
      show: false
    }
  },
  methods: {
    onFileChange (e) {
      this.show = true
      const file = e.target.files[0]
      this.url.unshift(URL.createObjectURL(file))
      this.titel.unshift(this.titl)
      this.name.unshift(this.usnm)
      // alert(URL.createObjectURL(file))
    }
  }
}

</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.Titel {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 40px;
  color: #FF9A56;
  text-align: center;
}
.Upload {
  width: 40vw;
  margin-left: 30vw;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  color: #FF9A56;
  transition: 1s;
  position: relative;
  padding: 10px;
  margin-bottom: 30px;
  box-sizing: border-box;
  * {
   display: block;
  }
}
#Title, #User {
  outline: 0px;
  border: 2px solid #FF9A56;
  border-radius: 5px;
  width: 50%;
  height: 25px;
  margin-top: 25px;
  padding-left: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: 25%;

}
.BrandC {
  width: 50%;
  margin-left: 25%;
  margin-top: 5px;
  text-align: left;
  margin-bottom: 20px;
}
#BrandBox, #Brand {
  display: inline;
  font-size: 14px;
}
#BrandBox {
  margin-right: 8px;
}

.btnC {
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 50%;
  // margin-left: 25%;
}

.btn {
  border: 2px solid #FF9A56;
  color: gray;
  background-color: white;
  padding: 6px 15px;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 50px;
  font-size: 16px;
  transition: 1s;
  &:hover {
    color: #fff;
    background: #FF9A56;
    transition: 1s;
  }
}

.btnC input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
.Okey {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  color: #FF9A56;
  background: #ffffff;
  margin-left: -10px;
  margin-top: -10px;
  border-radius: 5px;
  z-index: 1023;
  font-size: 24px;
  padding-top: 100px;
  display: none;
  transition: 1s;
  // margin-top: 3px;
}

#Submit {
  margin-top: 70px;
  margin-bottom: 30px;
  opacity: 0;
  width: 80%;
  margin-left: 10%;
}
.show {
  opacity: 1 !important;
  transition: 1s;
  display: block;
}
//Sections
#section1 {
  height: 100vh;
  background-color: none;
}
#section2 {
  height: 90vh;
  background-color: none;
}
#section3 {
  iframe {
    margin-left: 10vw;
    height: 20vw;
    width: 35vw;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    display: inline-block;
  }
}
#section4 {
  text-align: center;
  padding-left: 20vw;
  padding-right: 20vw;
  color: #FF9A56;
  margin-top: 100px;
  margin-bottom: 100px;
}
@media only screen and (max-width: 850px) {
  .Upload {
    width: 80vw;
    margin-left: 10vw;
  }
  #section3 {
    iframe {
      display: block;
      width: 90vw;
      margin-left: 5vw;
      height: auto;
      margin-bottom: 40px;
    }
  }

}
@media only screen and (max-width: 550px) {
  #section2 {
    height: 50vh;
  }
}
</style>
